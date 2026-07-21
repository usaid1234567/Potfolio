"use client";

import { useEffect, useRef, useState } from "react";

export interface ParallaxOffset {
  x: number;
  y: number;
}

/**
 * Tracks pointer position within a container and returns a small offset
 * suitable for driving a subtle parallax transform. Returns { x: 0, y: 0 }
 * on touch devices or when the pointer hasn't moved yet.
 */
export function useMouseParallax(strength = 16) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState<ParallaxOffset>({ x: 0, y: 0 });

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    function handlePointerMove(event: PointerEvent) {
      const rect = node!.getBoundingClientRect();
      const relativeX = (event.clientX - rect.left) / rect.width - 0.5;
      const relativeY = (event.clientY - rect.top) / rect.height - 0.5;
      setOffset({ x: relativeX * strength, y: relativeY * strength });
    }

    function handlePointerLeave() {
      setOffset({ x: 0, y: 0 });
    }

    node.addEventListener("pointermove", handlePointerMove);
    node.addEventListener("pointerleave", handlePointerLeave);
    return () => {
      node.removeEventListener("pointermove", handlePointerMove);
      node.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [strength]);

  return { containerRef, offset };
}
