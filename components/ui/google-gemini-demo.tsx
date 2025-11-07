"use client";

import { useScroll, useTransform, useSpring } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";

export function GoogleGeminiEffectDemo() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  
  // The scroll progress is measured across the whole pinned section (hero + spacer)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"], // full section progress
  });

  // Smooth the progress so the paths feel natural
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 });

  // Drive all pathLengths off full progress [0..1], clamped
  const pathLengthFirst = useTransform(progress, [0, 1], [0.2, 1.2], { clamp: true });
  const pathLengthSecond = useTransform(progress, [0, 1], [0.15, 1.2], { clamp: true });
  const pathLengthThird = useTransform(progress, [0, 1], [0.1, 1.2], { clamp: true });
  const pathLengthFourth = useTransform(progress, [0, 1], [0.05, 1.2], { clamp: true });
  const pathLengthFifth = useTransform(progress, [0, 1], [0.0, 1.2], { clamp: true });

  return (
    // The section itself is taller than 1 screen so we have something to scroll
    // SPACER_H controls how long the hero stays pinned while the animation plays.
    <section id="home" ref={ref} className="relative w-full bg-black">
      {/* Sticky pinned hero that fills the viewport */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <GoogleGeminiEffect
          title={
            <>
              <span className="text-[1.9125rem] md:text-[3.1875rem]">
                Giving Your Business
              </span>
              <br />
              <span className="text-[3.234375rem] md:text-[5.390625rem] font-bold">
                UnfairAdvantage of AI
              </span>
            </>
          }
          description="Scroll to see how our AI solutions come to life, transforming your business with cutting-edge technology."
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
          // Increased spacing (40% more) between text and waves
          bottomSafeArea="pb-[36vh] md:pb-[45vh] lg:pb-[50vh]"
          contentClassName="md:mt-0"
        />
      </div>

      {/* Spacer creates the scroll distance that drives the animation.
         Increase/decrease to control how long the hero stays pinned. */}
      <div className="h-[120vh]" />
    </section>
  );
}

