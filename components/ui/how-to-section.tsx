"use client";

interface StepCard {
  number: string;
  title: string;
  description: string;
}

const steps: StepCard[] = [
  {
    number: "01",
    title: "We Discover",
    description: "We go beyond surface-level understanding. We dissect your business, decode your industry, and identify every gap, strength, and untapped opportunity — with absolute clarity.",
  },
  {
    number: "02",
    title: "We Design",
    description: "We engineer custom-built solutions that give you the Unfair Advantage  — solutions that multiply profits, Aggressively slash costs, skyrocket productivity, and deliver experiences your customers can’t ignore.",
  },
  {
    number: "03",
    title: "You Dominate",
    description: "This is where everything changes. With your unfair advantage in motion, you don’t just survive the competition — you crush it. You lead the market, set new benchmarks, and become the standard others chase.",
  },
];

export function HowToSection() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto">
        {/* Centered Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            How to Get Your Unfair Advantage
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


