"use client";

interface StepCard {
  number: string;
  title: string;
  description: string;
}

const steps: StepCard[] = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We start by understanding your business goals, challenges, and opportunities. Our team analyzes your current processes to identify where AI can create the most impact.",
  },
  {
    number: "02",
    title: "Custom AI Development",
    description: "We design and build intelligent solutions tailored to your specific needs. From automation to predictive analytics, every solution is crafted for maximum ROI.",
  },
  {
    number: "03",
    title: "Deploy & Scale",
    description: "We implement the solution seamlessly into your workflow and provide ongoing support. As your business grows, your AI systems scale with you.",
  },
];

export function HowToSection() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto">
        {/* Centered Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            How to Get Your Advantage
          </h2>
        </div>

        {/* 3 Column Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Card */}
              <div className="h-full p-8 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:-translate-y-2">
                {/* Number */}
                <div className="text-6xl font-bold text-white/20 mb-4">
                  {step.number}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Line (optional - only between cards, not after last) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-white/20 -translate-y-1/2 z-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

