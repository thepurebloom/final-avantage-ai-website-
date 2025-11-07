'use client';

import { SplineScene } from "@/components/ui/spline";
import { Spotlight } from "@/components/ui/spotlight";

export function SplineSceneBasic() {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <div className="flex h-full w-full">
        <div className="flex-1 p-12 relative z-10 flex flex-col justify-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
          Giving Your Business an Unfair Advantage of AI
          </h1>
          <p className="mt-6 text-neutral-300 max-w-lg text-lg">
          We Build Custom AI Solutions That Give Your Business an Unfair Advantage.
          </p>
        </div>
        <div className="flex-1 relative min-h-[500px]">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

