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
3. Set the recipient email to: **hanschemicalspl@gmail.com** (in the "To Email" field)
4. Use this template content:

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

**Important**: Make sure the "To Email" field in your template is set to `hanschemicalspl@gmail.com` or use the variable `{{to_email}}`.

5. **Configure File Attachments** (IMPORTANT):
   - Click on the **"Attachments"** tab in your template editor
   - Click **"Add Attachment"**
   - Select **"Form File Attachment"** (not Variable Attachment)
   - In the **"Parameter Name"** field, enter: `attachment` (this must match the file input name in the form)
   - Save the attachment configuration
   - **Note**: Without this step, attachments will not be included in emails

6. Save the template and note down the **Template ID** (e.g., `template_xxxxxxx`)

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
- `{{from_name}}` - User's name (required)
- `{{from_email}}` - User's email address (required)
- `{{phone}}` - User's phone number (or "Not provided" if empty)
- `{{company}}` - User's company name (or "Not provided" if empty)
- `{{subject}}` - Message subject (required)
- `{{message}}` - Message content (required)
- `{{to_email}}` - Always set to "hanschemicalspl@gmail.com"
- `{{attachment_name}}` - Attachment filename (or "No attachment" if none)
- `{{attachment_content}}` - Base64 encoded attachment (empty string if no attachment)
- `{{attachment_type}}` - MIME type of attachment (e.g., "application/pdf", empty if none)

## Troubleshooting

- Make sure all environment variables are set correctly
- Check the browser console for any error messages
- Verify your EmailJS service is active
- Ensure the email template uses the correct variable names
- **If attachments are not included**: Make sure you configured the attachment in the template's "Attachments" tab with parameter name "attachment"
- **File size limit**: EmailJS free tier limits total payload to 50KB (including form data + attachment). Keep attachments small (<30KB recommended)
