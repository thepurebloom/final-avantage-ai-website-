// app/about/page.tsx

import Image from "next/image";
import { StatsSection } from "@/components/ui/stats-section";
import { LogosCarousel } from "@/components/ui/logos-carousel";
import { BackgroundPaths } from "@/components/ui/background-paths";
import Footer4Col from "@/components/ui/footer-column";

export const metadata = {
  title: "About Us - Avantage AI",
  description: "Learn about Avantage AI, our founders, mission, and the impact we create for businesses worldwide.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section - About Avantage AI */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black" />
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
              About Avantage AI
            </h1>
            <div className="space-y-6 text-lg md:text-xl text-white/80 leading-relaxed">
              <p className="text-2xl md:text-3xl font-semibold text-white">
                At Avantage AI, we don{'\''}t just build technology — we build your business advantage.
              </p>
              <p>
                We design intelligent software, apps, automations, bots, and websites that empower businesses to reduce costs, boost profits, increase productivity, and scale effortlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-12">
            What Makes Us Different?
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-white/80 leading-relaxed">
            <p>
              We combine the strategic clarity of business consulting with the power of cutting-edge AI and automation. The result is technology that doesn{'\''}t just look smart — it thinks, acts, and evolves smartly with your business.
            </p>
            <p>
              From automating complex workflows to creating decision-making systems that drive growth, we build tools that work for you, not the other way around.
            </p>
            <p>
              At Avantage AI, innovation isn{'\''}t a buzzword — it{'\''}s our foundation. Every product we create is guided by three principles:
            </p>
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-center items-center py-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  Performance
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                  Precision
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-red-600 bg-clip-text text-transparent">
                  Purpose
                </div>
              </div>
            </div>
            <p className="text-2xl font-semibold text-white text-center pt-6">
              We exist to give your business the unfair advantage it deserves.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Founders Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Meet the Founders
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Left Column - Sumit Thakur */}
          <div className="space-y-6">
            <div className="relative w-full aspect-square max-w-md mx-auto overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-blue-950/50 to-purple-950/50">
              <Image
                src="/founders/sumit.jpg"
                alt="Sumit Thakur - Business Strategist & Advisor"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Sumit Thakur
              </h3>
              <p className="text-xl text-blue-400 font-semibold">
                Business Strategist & Advisor
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                A renowned Business & Brand Consultant, Sumit Thakur has spent over 15 years helping businesses grow into 7-figure powerhouses.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                At Avantage AI, he bridges the gap between business goals and technology, ensuring every solution directly impacts profitability, efficiency, and growth.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Sumit{'\''}s strategic foresight and deep understanding of business dynamics form the backbone of Avantage AI{'\''}s client success stories.
              </p>
            </div>
          </div>

          {/* Right Column - Meer Sheik */}
          <div className="space-y-6">
            <div className="relative w-full aspect-square max-w-md mx-auto overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-purple-950/50 to-pink-950/50">
              <Image
                src="/founders/meer.jpg"
                alt="Meer Sheikh - Technology Architect & AI Expert"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Meer Sheikh
              </h3>
              <p className="text-xl text-purple-400 font-semibold">
                Technology Architect & AI Expert
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                A mastermind behind intelligent automation, Meer Sheikh transforms complex ideas into seamless, scalable systems. 
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                With expertise in AI architecture, automation, and software design, he ensures every Avantage AI solution is built for performance, reliability, and long-term innovation.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                He doesn{'\''}t just create tech — he engineers possibilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Reused from Home Page */}
      <section className="py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Our Impact in Numbers
        </h2>
        <p className="text-lg md:text-xl text-white/70 text-center mb-12 max-w-3xl mx-auto">
          Every number here represents a story of transformation — businesses that scaled smarter, faster, and leaner with Avantage AI.
        </p>
        <StatsSection />
      </section>

      {/* Mission & Vision Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="bg-gradient-to-br from-blue-950/30 to-purple-950/30 border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-sm">
            <div className="inline-block bg-blue-500/20 rounded-full p-3 mb-6">
              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-white/80 leading-relaxed">
              To empower businesses with intelligent technology that transforms the way they operate — reducing dependency on manpower, increasing profit margins, and enabling effortless scalability through automation and AI.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-purple-950/30 to-pink-950/30 border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-sm">
            <div className="inline-block bg-purple-500/20 rounded-full p-3 mb-6">
              <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Vision
            </h3>
            <p className="text-lg text-white/80 leading-relaxed">
              To become the most trusted AI transformation partner for businesses globally — building a future where companies operate intelligently, make better decisions, and achieve more with less.
            </p>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            Our Clients
          </h2>
          <p className="text-lg md:text-xl text-white/70 text-center max-w-4xl mx-auto leading-relaxed">
            We{'\''}ve had the privilege of partnering with forward-thinking brands across industries — from manufacturing and real estate to retail, healthcare, and finance.
          </p>
          <p className="text-lg md:text-xl text-white/70 text-center max-w-4xl mx-auto leading-relaxed mt-4">
            Each partnership begins with a single goal: to unlock hidden potential through the power of AI and automation.
          </p>
        </div>
        <LogosCarousel heading="Trusted by Industry Leaders" />
      </section>

      {/* Background Paths Section */}
      <BackgroundPaths title="Get Your Unfair Advantage" />

      {/* Footer with Newsletter */}
      <Footer4Col />
    </>
  );
}

