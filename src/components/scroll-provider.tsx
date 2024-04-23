"use client";
import { useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

export default function ScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<any>(null);
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        // ... all available Locomotive Scroll instance options
      }}
      containerRef={containerRef}
    >
      <main data-scroll-container ref={containerRef}>
        {children}
      </main>
    </LocomotiveScrollProvider>
  );
}
