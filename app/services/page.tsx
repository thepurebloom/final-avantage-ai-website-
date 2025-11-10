"use client";

import { motion } from "framer-motion";
import { BackgroundPaths } from "@/components/ui/background-paths";
import Footer4Col from "@/components/ui/footer-column";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Automate Your Tasks",
      subtitle: "Let AI do the work. You focus on growth.",
      description: "We help you eliminate repetitive manual tasks, freeing your time and mind to focus on what really matters — scaling your business. Our automations replace multiple employees and work around the clock without breaks, errors, or burnout.",
      features: [
        "Lead collection, follow-ups & client reminders",
        "WhatsApp & email communication",
        "Invoicing, billing & report generation",
        "Employee attendance, HR & task management",
        "Appointment booking, scheduling & payments"
      ],
      cta: "Stop managing tasks. Start managing growth."
    },
    {
      id: 2,
      title: "Custom Software Development",
      subtitle: "Software that fits your business — not the other way around.",
      description: "Your business is unique, so why settle for generic tools? We design custom-built software that aligns perfectly with your workflows, saving hours and simplifying operations.",
      features: [
        "ERP & CRM Systems",
        "Franchise & Multi-Branch Management Tools",
        "HR, Payroll & Attendance Platforms",
        "Billing, Inventory & Order Systems",
        "Client Management Dashboards"
      ],
      cta: "One powerful system that runs your entire business."
    },
    {
      id: 3,
      title: "High-End Web & App Development",
      subtitle: "Design that converts. Performance that impresses.",
      description: "Your website or app isn't just an online presence — it's your brand's first impression. We create visually stunning, high-converting, and performance-driven websites and apps that make your business look premium and feel effortless to use.",
      features: [
        "Sleek, brand-consistent design & UI",
        "Fast, secure & mobile-friendly builds",
        "Conversion-focused landing pages",
        "Custom Web & Mobile Apps (iOS & Android)",
        "SEO & speed optimized experiences"
      ],
      cta: "Make your business look as powerful as it truly is."
    },
    {
      id: 4,
      title: "Marketing & Sales Automation",
      subtitle: "Turn chaos into predictable revenue.",
      description: "We build intelligent systems that capture leads, follow up automatically, and close deals while you sleep. Our AI-driven automations connect your marketing and sales into one seamless growth engine.",
      features: [
        "Lead generation & nurturing funnels",
        "WhatsApp, Email & CRM follow-up flows",
        "Client onboarding & retention systems",
        "Ad performance dashboards & reporting"
      ],
      cta: "No more lost leads. No more missed sales."
    },
    {
      id: 5,
      title: "E-Commerce High Conversion & Automated Store",
      subtitle: "Build a store that sells even when you don't.",
      description: "We create e-commerce stores that not only look stunning but are fully automated — handling orders, customer queries, abandoned carts, and marketing all by themselves.",
      features: [
        "Conversion-optimized design & product pages",
        "AI-driven upsells, cross-sells & follow-ups",
        "Automated order & inventory management",
        "CRM & WhatsApp integration",
        "Analytics that track every rupee earned"
      ],
      cta: "From visitors to loyal customers — on autopilot."
    },
    {
      id: 6,
      title: "The Impossible & Never Done Before Projects",
      subtitle: "If no one can do it, that's when we start.",
      description: "We specialize in bold, unthinkable, high-tech projects that others say can't be done. From AI systems that think, to platforms that scale across industries — we bring the 'impossible' to life.",
      features: [
        "End-to-end automation ecosystems",
        "Multi-industry AI-integrated platforms",
        "Custom-built CRMs with predictive AI",
        "Intelligent business command centers"
      ],
      cta: "If it sounds crazy — it's probably what we do next."
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black" />
        
        <div className="relative z-10 container mx-auto px-4 py-24">
          <motion.div 
            className="max-w-5xl mx-auto text-center space-y-6"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our Services
            </h1>
            
            <p className="text-2xl md:text-3xl text-white/90 font-semibold">
              The Advantage That Transforms Your Business
            </p>
            
            <div className="space-y-4 text-lg md:text-xl text-white/70 leading-relaxed max-w-4xl mx-auto pt-6">
              <p>
                At Avantage AI, we don{'\''}t just build tech — <span className="text-white font-semibold">we engineer advantage.</span>
              </p>
              <p>
                Every service we offer is designed to help you automate, scale, and dominate your industry.
                Whether you want to reduce manual work, increase profits, or build something the world hasn{'\''}t seen before — it all starts with a Discovery Call.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="w-full bg-black py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-12 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300">
                  {/* Service Number */}
                  <div className="absolute top-8 right-8 text-6xl md:text-8xl font-black text-white/5 group-hover:text-white/10 transition-colors">
                    {String(service.id).padStart(2, '0')}
                  </div>

                  <div className="relative space-y-6">
                    {/* Title */}
                    <div className="space-y-3">
                      <h2 className="text-3xl md:text-4xl font-bold text-white group-hover:text-purple-200 transition-colors duration-300">
                        {service.title}
                      </h2>
                      <p className="text-xl md:text-2xl text-white/80 font-medium">
                        {service.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-lg text-white/60 leading-relaxed max-w-4xl">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="pt-4">
                      <p className="text-white/90 font-semibold mb-4">We can help you with:</p>
                      <div className="grid md:grid-cols-2 gap-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="mt-2 shrink-0">
                              <div className="w-2 h-2 rounded-full bg-gradient-to-br from-purple-500 to-blue-500" />
                            </div>
                            <p className="text-white/70">{feature}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-t border-white/10">
                      <p className="text-lg md:text-xl font-semibold text-white/90 italic">
                        {service.cta}
                      </p>
                      <a href="/contact">
                        <Button 
                          variant="ghost"
                          className="bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30 transition-all duration-300"
                        >
                          Book a Discovery Call →
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full bg-black py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Avantage AI?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <div className="space-y-3 text-center">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-purple-500 to-blue-500 bg-clip-text text-transparent">
                  Performance
                </div>
                <p className="text-white/70">Built for speed, reliability, and scale</p>
              </div>
              <div className="space-y-3 text-center">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-purple-500 to-blue-500 bg-clip-text text-transparent">
                  Precision
                </div>
                <p className="text-white/70">Every detail matters, every solution fits</p>
              </div>
              <div className="space-y-3 text-center">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-purple-500 to-blue-500 bg-clip-text text-transparent">
                  Purpose
                </div>
                <p className="text-white/70">Technology that serves your business goals</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full bg-black py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center space-y-8 rounded-2xl border border-white/10 bg-white/[0.03] p-12 md:p-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to Get Your Unfair Advantage?
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Book a Discovery Call today and let{'\''}s discuss how we can transform your business with intelligent automation and cutting-edge technology.
            </p>
            <div className="pt-4">
              <a href="/contact">
                <Button 
                  className="bg-gradient-to-br from-purple-500 to-blue-500 hover:from-purple-400 hover:to-blue-400 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg transition-all duration-300"
                >
                  Schedule Your Discovery Call Now →
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Background Paths Section */}
      <BackgroundPaths title="Transform Your Business Today" />

      {/* Footer */}
      <Footer4Col />
    </>
  );
}
