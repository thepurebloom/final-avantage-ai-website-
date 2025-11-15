import { NextRequest, NextResponse } from 'next/server';

// Test endpoint to verify route is working
export async function GET() {
  return NextResponse.json(
    { 
      message: 'Contact API is working!',
      email: process.env.CONTACT_EMAIL ? 'configured' : 'not configured',
      web3forms: process.env.WEB3FORMS_ACCESS_KEY ? 'configured' : 'not configured'
    },
    { status: 200 }
  );
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body with error handling
    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      console.error('Failed to parse request body:', parseError);
      return NextResponse.json(
        { error: 'Invalid request format. Please ensure all fields are filled correctly.' },
        { status: 400 }
      );
    }

    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Get the recipient email from environment variable
    const recipientEmail = process.env.CONTACT_EMAIL;
    
    if (!recipientEmail || recipientEmail === 'your-email@example.com') {
      console.error('CONTACT_EMAIL not configured');
      return NextResponse.json(
        { error: 'Email not configured. Please set CONTACT_EMAIL in .env.local' },
        { status: 500 }
      );
    }

    console.log('Sending email to:', recipientEmail);
    console.log('Form data:', { name, email, phone, message: message.substring(0, 50) + '...' });

    // Using Web3Forms (more reliable, 250 free submissions/month)
    // Get access key from https://web3forms.com (no signup needed, just enter your email)
    const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (web3formsKey) {
      // Use Web3Forms (more reliable, 250 free submissions/month)
      // Web3Forms expects specific field names
      const web3formsPayload = {
        access_key: web3formsKey.trim(), // Remove any whitespace
        subject: `New Contact Form Submission from ${name}`,
        name: name,
        email: email,
        phone: phone,
        message: message,
        // Optional: Add these for better email formatting
        from_name: name,
        from_email: email,
      };

      console.log('Sending via Web3Forms with key:', web3formsKey.substring(0, 8) + '...');

      // Web3Forms accepts both JSON and form-urlencoded
      // Using JSON format as it's cleaner for server-side
      const web3formsResponse = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'User-Agent': 'Next.js-Contact-Form/1.0',
        },
        body: JSON.stringify({
          access_key: web3formsKey.trim(),
          subject: `New Contact Form Submission from ${name}`,
          name: name,
          email: email,
          phone: phone,
          message: message,
        }),
      });

      // Check content type before parsing
      const contentType = web3formsResponse.headers.get('content-type');
      console.log('Web3Forms response status:', web3formsResponse.status);
      console.log('Web3Forms response content-type:', contentType);

      let web3formsData;
      
      if (contentType && contentType.includes('application/json')) {
        web3formsData = await web3formsResponse.json();
        console.log('Web3Forms response:', web3formsData);
      } else {
        // If not JSON, get the text response to see what went wrong
        const textResponse = await web3formsResponse.text();
        console.error('Web3Forms returned non-JSON response:', textResponse.substring(0, 500));
        throw new Error(`Web3Forms API returned an error. Status: ${web3formsResponse.status}. Please check your access key and try again.`);
      }
      
      if (web3formsResponse.ok && web3formsData.success) {
        console.log('✅ Email sent successfully via Web3Forms');
        return NextResponse.json(
          { message: 'Message sent successfully!' },
          { status: 200 }
        );
      } else {
        console.error('❌ Web3Forms error:', web3formsData);
        throw new Error(web3formsData.message || 'Failed to send email via Web3Forms');
      }
    } else {
      // Fallback to FormSubmit
      // FormSubmit requires email verification first time - user needs to check email
      const formData = new URLSearchParams();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('message', message);
      formData.append('_subject', `New Contact Form Submission from ${name}`);
      formData.append('_captcha', 'false');
      formData.append('_template', 'table');
      formData.append('_autoresponse', `Thank you ${name} for contacting us! We'll get back to you soon.`);

      try {
        const formSubmitResponse = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(recipientEmail)}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
          },
          body: formData.toString(),
        });

        const formSubmitData = await formSubmitResponse.json();
        console.log('FormSubmit response:', formSubmitData);

        // FormSubmit returns success even if email needs verification
        // Check if it's a success response
        if (formSubmitResponse.ok || formSubmitData.success) {
          console.log('Email sent successfully via FormSubmit (or verification email sent)');
          return NextResponse.json(
            { message: 'Message sent successfully! Check your email for verification if this is your first submission.' },
            { status: 200 }
          );
        } else {
          // Check if it's asking for verification
          const errorMsg = formSubmitData.message || 'Failed to send email via FormSubmit';
          if (errorMsg.includes('verify') || errorMsg.includes('activation')) {
            throw new Error('Please check your email inbox and click the verification link from FormSubmit to activate your form. Then try submitting again.');
          }
          throw new Error(errorMsg);
        }
      } catch (fetchError: any) {
        console.error('FormSubmit fetch error:', fetchError);
        // If it's a network error or CORS issue, provide helpful message
        if (fetchError.message.includes('fetch')) {
          throw new Error('Unable to connect to email service. Please try Web3Forms instead (see QUICK_FIX.md) or check your internet connection.');
        }
        throw fetchError;
      }
    }
  } catch (error: any) {
    console.error('Contact form error:', error);
    console.error('Error stack:', error.stack);
    return NextResponse.json(
      { 
        error: error.message || 'Failed to send message. Please try again later.',
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}

// Ensure this is a dynamic route (not statically generated)
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

