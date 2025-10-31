'use client';

/**
 * Contact Page - EmailJS Integration
 * 
 * Setup Steps:
 * ===========
 * 1. In .env.local set:
 *    - NEXT_PUBLIC_EMAILJS_SERVICE_ID
 *    - NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
 *    - NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
 * 
 * 2. Restart dev server after editing env
 * 
 * 3. In EmailJS Dashboard:
 *    - Connect email service (Gmail, etc.)
 *    - Open/create template
 *    - Ensure template variables exist: from_name, from_email, phone, company, subject, message
 *    - Set "To Email" to: hanschemicalspl@gmail.com
 *    - Add Allowed Origins: http://localhost:3000 and your production domain
 */

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Phone, MapPin, Send, AlertCircle } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

// EmailJS environment variables
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

// Validate EmailJS configuration
function validateEmailJSConfig(): { valid: boolean; missing: string[] } {
  const missing: string[] = [];
  if (!SERVICE_ID || SERVICE_ID.trim() === '') {
    missing.push('NEXT_PUBLIC_EMAILJS_SERVICE_ID');
  }
  if (!TEMPLATE_ID || TEMPLATE_ID.trim() === '') {
    missing.push('NEXT_PUBLIC_EMAILJS_TEMPLATE_ID');
  }
  if (!PUBLIC_KEY || PUBLIC_KEY.trim() === '') {
    missing.push('NEXT_PUBLIC_EMAILJS_PUBLIC_KEY');
  }
  return { valid: missing.length === 0, missing };
}

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [initDone, setInitDone] = useState(false);

  // Initialize EmailJS once if configuration exists
  useEffect(() => {
    if (PUBLIC_KEY && !initDone) {
      try {
        emailjs.init(PUBLIC_KEY);
        setInitDone(true);
      } catch (err) {
        console.error('EmailJS init error:', err);
      }
    }
  }, [initDone]);

  // Validate configuration and show banner if missing
  const configCheck = validateEmailJSConfig();
  const showConfigBanner = !configCheck.valid;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Validate EmailJS configuration
      if (!configCheck.valid) {
        throw new Error(`Missing EmailJS configuration: ${configCheck.missing.join(', ')}`);
      }

      // Ensure form ref is available
      if (!formRef.current) {
        throw new Error('Form reference not available');
      }

      // Ensure EmailJS is initialized
      if (!initDone && PUBLIC_KEY) {
        emailjs.init(PUBLIC_KEY);
        setInitDone(true);
      }

      // Log form data for debugging
      console.info('Sending email via EmailJS sendForm:', {
        serviceId: SERVICE_ID,
        templateId: TEMPLATE_ID,
        hasPublicKey: !!PUBLIC_KEY
      });

      // Send via EmailJS using sendForm
      const response = await emailjs.sendForm(
        SERVICE_ID!,
        TEMPLATE_ID!,
        formRef.current,
        {
          publicKey: PUBLIC_KEY
        }
      );

      console.info('EmailJS response:', {
        status: response.status,
        text: response.text,
        response: response
      });

      // Check success
      if (response.status === 200 || response.text === 'OK') {
        handleSuccess();
      } else {
        throw new Error(`EmailJS returned unexpected status: ${response.status}, text: ${response.text}`);
      }
    } catch (error: any) {
      // Log full error for debugging
      console.error('EmailJS error details:', {
        error,
        message: error?.message,
        text: error?.text,
        status: error?.status,
        response: error?.response,
        stack: error?.stack
      });

      // Extract error message from various possible error formats
      let errorText = '';
      if (error?.text) {
        errorText = String(error.text);
      } else if (error?.message) {
        errorText = String(error.message);
      } else if (error?.response?.text) {
        errorText = String(error.response.text);
      } else {
        errorText = String(error);
      }

      // Convert to lowercase for easier matching
      const errorLower = errorText.toLowerCase();

      setSubmitStatus('error');

      // User-friendly error messages (EmailJS only)
      if (errorText?.includes('Missing EmailJS') || errorText?.includes('missing')) {
        setErrorMessage(`EmailJS configuration missing: ${configCheck.missing.join(', ')}. Please check your .env.local file.`);
      } else if (errorLower.includes('invalid') || errorLower.includes('400') || errorLower.includes('bad request')) {
        setErrorMessage('Invalid EmailJS configuration. Please check your Service ID, Template ID, and Public Key are correct.');
      } else if (errorLower.includes('401') || errorLower.includes('unauthorized') || errorLower.includes('authentication')) {
        setErrorMessage('EmailJS authentication failed. Please verify your Public Key is correct.');
      } else if (errorLower.includes('429') || errorLower.includes('rate limit') || errorLower.includes('too many')) {
        setErrorMessage('Rate limited. Please wait a moment and try again.');
      } else if (errorLower.includes('network') || errorLower.includes('fetch') || errorLower.includes('connection')) {
        setErrorMessage('Network error. Please check your internet connection and try again.');
      } else if (errorLower.includes('origin') || errorLower.includes('403') || errorLower.includes('forbidden')) {
        setErrorMessage('Origin not allowed. Please add http://localhost:3000 and your production domain in EmailJS → Account → Domains.');
      } else if (errorLower.includes('template') || errorLower.includes('service')) {
        setErrorMessage('EmailJS template or service error. Please verify your Template ID and Service ID are correct.');
      } else {
        // Show more specific error if available, otherwise generic
        const displayError = errorText.length > 100 ? errorText.substring(0, 100) + '...' : errorText;
        setErrorMessage(`Failed to send email: ${displayError}. Please check the browser console for details or contact us directly at hanschemicalspl@gmail.com`);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSuccess = () => {
    setSubmitStatus('success');
    // Clear form
    setFormData({
      from_name: '',
      from_email: '',
      phone: '',
      company: '',
      subject: '',
      message: ''
    });
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-28 md:pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-center">Contact Us</h1>
          <p className="text-slate-600 text-center mt-2">
            Call us or email us — we&apos;re here to help.
          </p>
        </div>

        {/* EmailJS Configuration Banner */}
        {showConfigBanner && (
          <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-md">
            <div className="flex items-start gap-2">
              <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-amber-800 font-medium mb-1">EmailJS Configuration Missing</p>
                <p className="text-amber-700 text-sm">
                  Please set the following environment variables in your .env.local file:
                </p>
                <ul className="text-amber-700 text-sm mt-1 ml-4 list-disc">
                  {configCheck.missing.map((varName) => (
                    <li key={varName}>{varName}</li>
                  ))}
                </ul>
                <p className="text-amber-700 text-sm mt-2">
                  Restart your development server after adding these variables.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="from_name" className="block text-sm font-medium text-slate-700 mb-2">
                  Name *
                </label>
                <Input
                  id="from_name"
                  name="from_name"
                  type="text"
                  required
                  value={formData.from_name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="from_email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email *
                </label>
                <Input
                  id="from_email"
                  name="from_email"
                  type="email"
                  required
                  value={formData.from_email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                  Phone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                  Company (Optional)
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Attachments are not available through this form. Please share a link to your requirement document if available."
                  className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900"
                />
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                  <p className="text-green-800">Message sent successfully! We&apos;ll get back to you soon.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-red-800 font-medium mb-1">Failed to send message</p>
                  {errorMessage && (
                    <p className="text-red-700 text-sm">{errorMessage}</p>
                  )}
                  {!errorMessage && (
                    <p className="text-red-700 text-sm">Please try again or contact us directly at hanschemicalspl@gmail.com</p>
                  )}
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting || showConfigBanner}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-lg px-6 py-3"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Email */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm flex items-start gap-3">
              <Mail className="h-6 w-6 text-slate-900 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                <a
                  href="mailto:hanschemicalspl@gmail.com"
                  className="text-slate-900 hover:text-slate-700 transition-colors"
                >
                  hanschemicalspl@gmail.com
                </a>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm flex items-start gap-3">
              <Phone className="h-6 w-6 text-slate-900 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Phone</h3>
                <div className="space-y-1">
                  <a
                    href="tel:+919022115122"
                    className="block text-slate-900 hover:text-slate-700 transition-colors"
                  >
                    +91 90221 15122
                  </a>
                  <a
                    href="tel:+919322255128"
                    className="block text-slate-900 hover:text-slate-700 transition-colors"
                  >
                    +91 93222 55128
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm flex items-start gap-3">
              <MapPin className="h-6 w-6 text-slate-900 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">Address</h3>
                <p className="text-slate-600">Mumbai, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
