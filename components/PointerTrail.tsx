"use client";

import { useEffect, useRef } from "react";

export default function PointerTrail() {
  const glowRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let posX = mouseX;
    let posY = mouseY;
    let frameId = 0;

    const move = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const loop = () => {
      posX += (mouseX - posX) * 0.14;
      posY += (mouseY - posY) * 0.14;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${posX - 80}px, ${posY - 80}px, 0)`;
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX - 5}px, ${mouseY - 5}px, 0)`;
      }

      frameId = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", move);
    frameId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      <div
        ref={glowRef}
        className="pointer-events-none fixed left-0 top-0 z-[70] hidden h-40 w-40 rounded-full bg-cyan-400/20 blur-2xl md:block"
        aria-hidden="true"
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[71] hidden h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.9)] md:block"
        aria-hidden="true"
      />
    </>
  );
}
