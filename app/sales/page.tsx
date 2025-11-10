"use client";

import { motion } from "framer-motion";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";
import { BackgroundPaths } from "@/components/ui/background-paths";
import Footer4Col from "@/components/ui/footer-column";
import { Button } from "@/components/ui/button";

export default function SalesPage() {
  const discoveryCallSteps = [
    "Understand your current business systems & challenges",
    "Identify tasks that can be automated immediately",
    "Show you real examples of how AI can save you time and money",
    "Map out a custom solution that fits your business perfectly",
    "Give you a clear roadmap for digital growth"
  ];

  const idealFor = [
    {
      title: "Business Owners",
      description: "who want to reduce dependency on manual work"
    },
    {
      title: "Founders",
      description: "who are tired of inefficiency and human error"
    },
    {
      title: "Entrepreneurs",
      description: "who want smart systems that scale without hiring more people"
    },
    {
      title: "Visionaries",
      description: "who are curious about how AI can revolutionize their day-to-day business"
    }
  ];

  const results = [
    { icon: "🚀", text: "Reduce manual work by 70%" },
    { icon: "💰", text: "Save lakhs in operational costs" },
    { icon: "📈", text: "Scale faster with zero added manpower" },
    { icon: "🤖", text: "Automate everything from leads to billing" }
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
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black" />
        
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-24">
          <motion.div 
            className="max-w-5xl mx-auto text-center space-y-8"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Let{'\''}s Build the{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Advantage
              </span>
              {" "}for Your Business
            </h1>
            
            <div className="space-y-6 text-xl md:text-2xl text-white/80 leading-relaxed max-w-4xl mx-auto">
              <p className="text-2xl md:text-3xl">
                Every business is either <span className="text-white font-semibold">leading</span> or <span className="text-white/60 italic">being left behind.</span>
              </p>
              <p className="text-lg md:text-xl">
                At <span className="text-white font-semibold">Avantage AI</span>, we help you build systems that <span className="text-white font-semibold">work for you</span>, so you can scale faster, reduce human errors, and increase profits — effortlessly.
              </p>
            </div>

            <motion.div
              className="pt-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <a href="/contact">
                <Button 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-10 py-7 text-xl font-bold rounded-xl shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  Book My Discovery Call →
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What We Do in the Discovery Call */}
      <section className="w-full bg-black py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What We Do in the Discovery Call
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                This isn{'\''}t a sales call — it{'\''}s a <span className="text-white font-semibold">strategy session</span> where we dive deep into your business and identify how technology and AI can give you an unfair advantage.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-12 space-y-6">
              <p className="text-lg text-white/80 mb-8">
                In your <span className="text-white font-semibold">30-minute Discovery Call</span>, we will:
              </p>

              <div className="space-y-4">
                {discoveryCallSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold group-hover:scale-110 transition-transform">
                        ✓
                      </div>
                    </div>
                    <p className="text-lg text-white/80 group-hover:text-white transition-colors">
                      {step}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="pt-8 border-t border-white/10 space-y-4">
                <p className="text-xl text-white/90 font-semibold text-center">
                  No pressure. No pitch. Just clarity.
                </p>
                <p className="text-lg text-white/70 text-center">
                  You{'\''}ll leave the call with a <span className="text-white font-semibold">clear vision</span> of how technology can <span className="text-white font-semibold">transform your business operations.</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who This Call Is For */}
      <section className="w-full bg-black py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Who This Call Is For
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                This Discovery Call is perfect for:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {idealFor.map((item, index) => (
                <motion.div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 group-hover:scale-150 transition-transform" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-lg text-white/70">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p 
              className="text-xl text-white/80 text-center mt-12 italic"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              If that sounds like you — this call will <span className="text-white font-semibold">open your eyes</span> to what{'\''}s possible.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Why Businesses Choose Us */}
      <section className="w-full bg-black py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Businesses Choose Avantage AI
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                We don{'\''}t just talk tech — we build <span className="text-white font-semibold">real results.</span>
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-12">
              <p className="text-lg text-white/80 mb-8 text-center">
                Our systems have helped businesses:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-10">
                {results.map((result, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-4xl">{result.icon}</div>
                    <p className="text-lg text-white font-semibold">{result.text}</p>
                  </motion.div>
                ))}
              </div>

              <div className="pt-8 border-t border-white/10 text-center space-y-4">
                <p className="text-xl text-white/90">
                  When you work with us, you{'\''}re not buying software —
                </p>
                <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  you{'\''}re building your advantage.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full bg-black py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-8 rounded-2xl border-2 border-purple-500/30 bg-gradient-to-br from-purple-950/20 to-blue-950/20 p-12 md:p-16 backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Book Your Discovery Call Now
            </h2>
            
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              It{'\''}s time to see what your business can truly achieve with the right technology.
            </p>

            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Click below to schedule your <span className="text-white font-semibold">Discovery Call</span> — and let{'\''}s explore how we can build your <span className="text-white font-semibold">Avantage.</span>
            </p>

            <motion.div
              className="pt-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="/contact">
                <Button 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-12 py-8 text-xl font-bold rounded-2xl shadow-2xl transition-all duration-300"
                >
                  Book My Discovery Call →
                </Button>
              </a>
            </motion.div>

            <div className="pt-6 border-t border-white/10">
              <p className="text-sm text-white/60 italic">
                Spots are limited because we work closely with only a few businesses at a time.
              </p>
              <p className="text-base text-white/80 mt-2 font-semibold">
                Secure your session now — and let{'\''}s create the systems that will power your next level of growth.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-16 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg md:text-xl text-white/70 text-center mb-12 max-w-3xl mx-auto">
              Don{'\''}t just take our word for it — hear from businesses that transformed their operations with Avantage AI.
            </p>
          </motion.div>
        </div>
        <StaggerTestimonials />
      </section>

      {/* Background Paths Section */}
      <BackgroundPaths title="Get Your Unfair Advantage" />

      {/* Footer */}
      <Footer4Col />
    </>
  );
}

