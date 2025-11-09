"use client";

import { AnimatedCounter } from "@/components/ui/animated-counter";

interface StatItem {
  label: string;
  value: number;
  suffix: string;
  decimals?: number;
}

const stats: StatItem[] = [
  {
    label: "Projects Completed",
    value: 13,
    suffix: "+",
  },
  {
    label: "Cost Reduced & Revenue Generated",
    value: 1.3,
    suffix: "M+",
    decimals: 1,
  },
  {
    label: "Workforce Reduced",
    value: 32,
    suffix: "+",
  },
  {
    label: "Number of Clients",
    value: 11,
    suffix: "+",
  },
];

export function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-black/95 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-2 p-6 rounded-xl bg-white/5 backdrop-blur border border-white/10 hover:border-white/20 transition-colors"
            >
              <div className="text-4xl md:text-5xl font-bold text-white">
                {stat.label.includes("Revenue") ? (
                  <>
                    $
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      decimals={stat.decimals || 0}
                    />
                  </>
                ) : (
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals || 0}
                  />
                )}
              </div>
              <p className="text-sm md:text-base text-white/70 leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


