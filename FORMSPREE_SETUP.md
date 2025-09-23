# Formspree Setup Instructions

## 1. Create a Formspree Account
1. Go to [https://formspree.io](https://formspree.io)
2. Sign up for a free account
3. Verify your email address

## 2. Create a New Form
1. In your Formspree dashboard, click "New Form"
2. Set the form name to "AutoStrata Contact Form"
3. Set the email to receive submissions: `contact@autostrata.ai`
4. Copy the form endpoint URL (it will look like `https://formspree.io/f/YOUR_FORM_ID`)

## 3. Configure Environment Variables
1. Open `.env.local` file in the project root
2. Replace `YOUR_FORM_ID` with your actual form ID from step 2
3. Save the file

Example:
```
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xpzgkqyw
```

## 4. Test the Form
1. Run `npm run dev`
2. Go to the contact page
3. Fill out and submit the form
4. Check your email at `contact@autostrata.ai`

## 5. Deploy
The form will work automatically when deployed, as long as the environment variable is set in your hosting platform.

## Form Fields
The contact form includes:
- **name** (required): Full name
- **email** (required): Email address
- **company** (optional): Company name
- **message** (required): What they need

## Features
- ✅ Spam protection
- ✅ Email notifications to contact@autostrata.ai
- ✅ Success/error messages
- ✅ Fallback to mailto if Formspree not configured
- ✅ Responsive design
