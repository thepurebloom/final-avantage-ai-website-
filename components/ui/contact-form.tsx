'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Submit to Next.js API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Check if response is JSON before parsing
      const contentType = response.headers.get('content-type');
      let data;
      
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        // If not JSON, it's likely an HTML error page
        const text = await response.text();
        console.error('Non-JSON response received:', text.substring(0, 200));
        setErrorMessage('Server error: Received invalid response. Please check the server logs.');
        setSubmitStatus('error');
        return;
      }

      if (!response.ok) {
        // Extract error message from API response
        const errorMsg = data.error || 'Failed to send message';
        setErrorMessage(errorMsg);
        setSubmitStatus('error');
        console.error('API Error:', errorMsg);
        return;
      }

      setSubmitStatus('success');
      setErrorMessage('');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error: any) {
      console.error('Form submission error:', error);
      setErrorMessage(error.message || 'Network error. Please check your connection and try again.');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={cn(
              "w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10",
              "text-white placeholder:text-white/40",
              "focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20",
              "transition-all duration-200"
            )}
            placeholder="Your name"
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={cn(
              "w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10",
              "text-white placeholder:text-white/40",
              "focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20",
              "transition-all duration-200"
            )}
            placeholder="your.email@example.com"
          />
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className={cn(
              "w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10",
              "text-white placeholder:text-white/40",
              "focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20",
              "transition-all duration-200"
            )}
            placeholder="+1 (555) 123-4567"
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className={cn(
              "w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10",
              "text-white placeholder:text-white/40",
              "focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20",
              "transition-all duration-200 resize-none"
            )}
            placeholder="Tell us about your project or inquiry..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "w-full px-6 py-4 rounded-lg font-semibold",
            "bg-gradient-to-r from-purple-600 to-blue-600",
            "text-white shadow-lg shadow-purple-500/25",
            "hover:shadow-xl hover:shadow-purple-500/40",
            "focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black",
            "transition-all duration-200",
            "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-lg"
          )}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Sending...
            </span>
          ) : (
            'Send Message'
          )}
        </button>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
            <p className="text-green-400 text-sm text-center">
              ✓ Message sent successfully! We{'\''}ll get back to you soon.
            </p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
            <p className="text-red-400 text-sm text-center mb-2">
              ✗ {errorMessage || 'Something went wrong. Please try again or email us directly.'}
            </p>
            {errorMessage && (
              <p className="text-red-300/70 text-xs text-center">
                Check the browser console and server logs for more details.
              </p>
            )}
          </div>
        )}
      </form>
    </div>
  );
}

