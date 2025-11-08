"use client";

import { Cloud, ICloud } from "react-icon-cloud";
import { useMemo, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
  },
  options: {
    wheelZoom: false,
    reverse: true,
    depth: 1,
    clickToFront: 500,
    initial: [0.1, -0.1],
    outlineColour: "#0000",
    maxSpeed: 0.035,
    minSpeed: 0.015,
    tooltip: "native",
    activeCursor: "default",
    textHeight: 25,
  },
};

type ServicesCloudProps = {
  items: string[];
  className?: string;
};

/**
 * Text-pill version of the interactive icon cloud.
 * Renders <a> nodes with pill styling instead of SVG logos.
 */
export function ServicesCloud({ items, className }: ServicesCloudProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const nodes = useMemo(
    () =>
      items.map((label, i) => (
        <a
          key={`${label}-${i}`}
          title={label}
          href="#"
          onClick={(e) => e.preventDefault()}
          className={cn(
            "select-none whitespace-nowrap rounded-full px-10 py-5",
            "bg-white/10 text-white hover:bg-white/20",
            "ring-1 ring-white/15 shadow-sm backdrop-blur",
          )}
          // You can optionally use data-weight to influence size if you want:
          // data-weight={Math.max(1, Math.min(5, Math.ceil(label.length / 6)))}
        >
          {label}
        </a>
      )),
    [items]
  );

  // Don't render the cloud on server-side to avoid hydration mismatch
  if (!isMounted) {
    return (
      <div className={cn("relative w-full flex items-center justify-center", className)}>
        <div className="text-white/50">Loading...</div>
      </div>
    );
  }

  return (
    <div className={cn("relative w-full", className)}>
      <Cloud {...cloudProps}>{nodes}</Cloud>
    </div>
  );
}

