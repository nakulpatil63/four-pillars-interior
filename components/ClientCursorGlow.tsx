"use client";

import { useEffect, useState } from "react";

export default function ClientCursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Only track on desktop viewports
    if (window.innerWidth < 768) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.tagName === "SELECT" ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".portfolio-item") ||
        target.closest(".faq-btn")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      id="cursor-glow"
      className="hidden md:block fixed pointer-events-none rounded-full z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: isHovered ? "500px" : "350px",
        height: isHovered ? "500px" : "350px",
        background: `radial-gradient(circle, rgba(200, 163, 77, ${
          isHovered ? 0.12 : 0.08
        }) 0%, rgba(200, 163, 77, 0) 70%)`,
      }}
    />
  );
}
