"use client";

import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about-us" className="py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden group">
            <Image
              src="/about/about.jpg"
              alt="About Avantage AI"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About Avantage AI
              </h2>
              <div className="space-y-4 text-white/80 text-base md:text-lg leading-relaxed">
                <p>
                  At Avantage AI, we build intelligent software, apps, bots, and websites that give
                  businesses a real competitive advantage — by helping them reduce costs,
                  increase profits, boost productivity, and scale effortlessly.
                </p>
                <p>
                  We combine the strategic clarity of business consulting with the power of
                  cutting-edge AI technology, creating systems that don&apos;t just look smart — they
                  act smart.
                </p>
                <p>
                  Every solution we create is built on performance, precision, and purpose. From
                  automating operations to improving decision-making, we design technology that
                  works for you, not the other way around.
                </p>
                <p className="font-semibold text-white">
                  At Avantage AI, innovation isn&apos;t a buzzword — it&apos;s the foundation of everything we
                  do.
                </p>
              </div>
            </div>

            {/* Optional CTA Button */}
            <div className="pt-4">
              <button className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

