# EmailJS Setup Instructions

This guide will help you set up EmailJS to send form submissions from the contact page to hanschemicalspl@gmail.com.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service

1. In the EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down the **Service ID** (e.g., `service_xxxxxxx`)

## Step 3: Create Email Template

1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Submission - {{subject}}

From: {{from_name}} ({{from_email}})
Phone: {{phone}}
Company: {{company}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from the Hans Chemicals website contact form.
```

4. Save the template and note down the **Template ID** (e.g., `template_xxxxxxx`)

## Step 4: Get Public Key

1. Go to "Account" in the EmailJS dashboard
2. Find your **Public Key** (e.g., `xxxxxxxxxxxxxxxx`)

## Step 5: Update Environment Variables

1. Open `.env.local` file in the project root
2. Replace the placeholder values with your actual EmailJS credentials:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_actual_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_actual_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## Step 6: Test the Form

1. Restart your development server: `npm run dev`
2. Go to the contact page
3. Fill out and submit the form
4. Check your email (hanschemicalspl@gmail.com) for the submission

## Template Variables Used

The form sends these variables to EmailJS:
- `{{from_name}}` - User's name
- `{{from_email}}` - User's email
- `{{phone}}` - User's phone number
- `{{company}}` - User's company
- `{{subject}}` - Message subject
- `{{message}}` - User's message
- `{{to_email}}` - Always set to hanschemicalspl@gmail.com

## Troubleshooting

- Make sure all environment variables are set correctly
- Check the browser console for any error messages
- Verify your EmailJS service is active
- Ensure the email template uses the correct variable names
