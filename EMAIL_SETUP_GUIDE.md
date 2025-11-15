# Email Setup Guide - Contact Form

This guide explains how to set up email notifications for your contact form using **free** services.

## 🎯 Quick Setup (Recommended: FormSubmit)

**FormSubmit** is the simplest option - completely free, unlimited submissions, no signup required!

### Step 1: Set Your Email Address

1. Create or edit `.env.local` file in your project root:

```bash
CONTACT_EMAIL=your-email@example.com
```

2. Replace `your-email@example.com` with your actual email address where you want to receive form submissions.

### Step 2: Test the Form

1. Start your development server:
```bash
npm run dev
```

2. Go to `/contact` page and submit the form
3. Check your email inbox (and spam folder) for the submission

**That's it!** FormSubmit will send you an email every time someone submits the contact form.

---

## 📧 Alternative Free Options

### Option 2: Formspree (50 free submissions/month)

1. Sign up at [formspree.io](https://formspree.io) (free)
2. Create a new form and get your form ID
3. Update `app/api/contact/route.ts`:

```typescript
const formspreeResponse = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name,
    email,
    phone,
    message,
  }),
});
```

**Free Tier:** 50 submissions/month

---

### Option 3: EmailJS (200 free emails/month)

1. Sign up at [emailjs.com](https://www.emailjs.com) (free)
2. Create an email service and template
3. Get your Service ID, Template ID, and Public Key
4. Install EmailJS:
```bash
npm install @emailjs/browser
```

5. Update `components/ui/contact-form.tsx` to use EmailJS directly from the client

**Free Tier:** 200 emails/month

---

### Option 4: Web3Forms (250 free submissions/month)

1. Get your access key from [web3forms.com](https://web3forms.com) (free, no signup needed)
2. Add to `.env.local`:
```bash
WEB3FORMS_ACCESS_KEY=your-access-key-here
```

3. Update `app/api/contact/route.ts`:

```typescript
const web3formsResponse = await fetch('https://api.web3forms.com/submit', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    access_key: process.env.WEB3FORMS_ACCESS_KEY,
    name,
    email,
    phone,
    message,
    subject: `New Contact Form Submission from ${name}`,
  }),
});
```

**Free Tier:** 250 submissions/month

---

### Option 5: Resend (3,000 free emails/month) - Requires API Key

1. Sign up at [resend.com](https://resend.com) (free)
2. Get your API key
3. Add to `.env.local`:
```bash
RESEND_API_KEY=re_your_api_key_here
CONTACT_EMAIL=your-email@example.com
```

4. Install Resend:
```bash
npm install resend
```

5. Update `app/api/contact/route.ts` to use Resend SDK

**Free Tier:** 3,000 emails/month (most generous!)

---

## 🔒 Security Notes

- Never commit `.env.local` to git (it's already in `.gitignore`)
- For production, add environment variables in your hosting platform (Vercel, Netlify, etc.)
- FormSubmit and Web3Forms don't require API keys, making them the simplest options

---

## 🚀 Production Deployment

When deploying to Vercel/Netlify:

1. Go to your project settings
2. Add environment variables:
   - `CONTACT_EMAIL=your-email@example.com`
   - (If using other services) Add their API keys

3. Redeploy your site

---

## 📊 Comparison Table

| Service | Free Tier | Setup Difficulty | Notes |
|---------|-----------|------------------|-------|
| **FormSubmit** | Unlimited | ⭐ Easiest | No signup, no API key |
| **Web3Forms** | 250/month | ⭐⭐ Easy | No signup, access key required |
| **Formspree** | 50/month | ⭐⭐ Easy | Signup required |
| **EmailJS** | 200/month | ⭐⭐⭐ Medium | Signup + template setup |
| **Resend** | 3,000/month | ⭐⭐⭐ Medium | Signup + API key |

---

## ✅ Current Implementation

The contact form is currently set up to use **FormSubmit** (Option 1). 

To change to a different service, simply:
1. Follow the instructions for your preferred option above
2. Update `app/api/contact/route.ts` with the new service code
3. Add any required environment variables

---

## 🆘 Troubleshooting

**Not receiving emails?**
- Check your spam/junk folder
- Verify the email address in `.env.local` is correct
- Check browser console for errors
- Verify the API route is working: Check Network tab in browser dev tools

**Getting errors?**
- Make sure `.env.local` exists and has `CONTACT_EMAIL` set
- Restart your dev server after changing `.env.local`
- Check that the email service endpoint is correct

---

**Need help?** Check the service's documentation or contact their support.

