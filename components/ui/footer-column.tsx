import {
  Facebook,
  Youtube,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Linkedin,
  Send,
} from 'lucide-react';
import Link from 'next/link';

const data = {
  facebookLink: 'https://facebook.com/avantageai',
  instaLink: 'https://www.instagram.com/avantage_ai',
  twitterLink: 'https://x.com/AiAvantage',
  linkedinLink: 'https://linkedin.com/company/avantageai',
  youtubeLink: 'https://www.youtube.com/@AvantageAI',
  services: {
    aiConsulting: '/ai-consulting',
    mlSolutions: '/ml-solutions',
    automation: '/automation',
    dataAnalytics: '/data-analytics',
  },
  contact: {
    email: 'contact@avantageai.com',
    phone: '+919270856871',
    address: "Sumit Apartments, 493, Professor's Colony, Hanuman Nagar, Nagpur, Maharashtra 440024",
  },
  company: {
    name: 'Avantage AI',
    description:
      'Empowering businesses with cutting-edge AI solutions. We help organizations leverage artificial intelligence to drive innovation, efficiency, and growth.',
    logo: '/logo.png',
  },
};

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: data.linkedinLink },
  { icon: Twitter, label: 'Twitter', href: data.twitterLink },
  { icon: Facebook, label: 'Facebook', href: data.facebookLink },
  { icon: Instagram, label: 'Instagram', href: data.instaLink },
  { icon: Youtube, label: 'YouTube', href: data.youtubeLink },
];

const serviceLinks = [
  { text: 'AI Consulting', href: data.services.aiConsulting },
  { text: 'ML Solutions', href: data.services.mlSolutions },
  { text: 'Automation', href: data.services.automation },
  { text: 'Data Analytics', href: data.services.dataAnalytics },
];

const contactInfo = [
  { icon: Mail, text: data.contact.email },
  { icon: Phone, text: data.contact.phone },
  { icon: MapPin, text: data.contact.address, isAddress: true },
];

export default function Footer4Col() {
  return (
    <footer className="bg-secondary dark:bg-secondary/20 mt-16 w-full place-self-end rounded-t-xl">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
        {/* Newsletter Section */}
        <div className="mb-16 pb-12 border-b border-border">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-foreground mb-3">
              Stay Updated with AI Insights
            </h3>
            <p className="text-foreground/60 mb-8">
              Subscribe to our newsletter for the latest AI trends, insights, and exclusive updates delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Subscribe
                <Send className="size-4" />
              </button>
            </form>
            <p className="text-xs text-foreground/40 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="text-primary flex justify-center gap-2 sm:justify-start">
              <img
                src={data.company.logo || '/placeholder.svg'}
                alt="logo"
                className="h-8 w-8 rounded-full"
              />
              <span className="text-2xl font-semibold">
                {data.company.name}
              </span>
            </div>

            <p className="text-foreground/50 mt-6 max-w-md text-center leading-relaxed sm:max-w-xs sm:text-left">
              {data.company.description}
            </p>

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-primary hover:text-primary/80 transition"
                  >
                    <span className="sr-only">{label}</span>
                    <Icon className="size-6" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">Our Services</p>
              <ul className="mt-8 space-y-4 text-sm">
                {serviceLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a
                      className="text-secondary-foreground/70 hover:text-secondary-foreground transition"
                      href={href}
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium">Contact Us</p>
              <ul className="mt-8 space-y-4 text-sm">
                {contactInfo.map(({ icon: Icon, text, isAddress }) => (
                  <li key={text}>
                    <a
                      className="flex items-center justify-center gap-1.5 sm:justify-start"
                      href="#"
                    >
                      <Icon className="text-primary size-5 shrink-0 shadow-sm" />
                      {isAddress ? (
                        <address className="text-secondary-foreground/70 -mt-0.5 flex-1 not-italic transition">
                          {text}
                        </address>
                      ) : (
                        <span className="text-secondary-foreground/70 flex-1 transition">
                          {text}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm">
              <span className="block sm:inline">All rights reserved.</span>
            </p>

            <p className="text-secondary-foreground/70 mt-4 text-sm transition sm:order-first sm:mt-0">
              &copy; {new Date().getFullYear()} {data.company.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

