"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

interface SpotlightOverlayProps {
  spotlightRadius?: number;
  transitionOpacity?: number;
  smoothEdge?: boolean;
  invertOnDarkMode?: boolean;
  className?: string;
}

export default function SpotlightOverlay({
  spotlightRadius = 100,
  transitionOpacity = 1,
  smoothEdge = true,
  invertOnDarkMode = true,
  className = "",
}: SpotlightOverlayProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isInitialized, setIsInitialized] = useState(false);
  const { theme, systemTheme } = useTheme();

  // Determine the current theme
  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDarkMode = currentTheme === "dark";

  // Determine overlay color based on theme
  const overlayColor = invertOnDarkMode && isDarkMode ? "white" : "black";
  const overlayMode =
    invertOnDarkMode && isDarkMode ? "reveal-dark" : "reveal-light";

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        setMousePosition({ x: touch.clientX, y: touch.clientY });
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        setMousePosition({ x: touch.clientX, y: touch.clientY });
      }
    };

    // Set initial position to center of screen
    const initializePosition = () => {
      setMousePosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
      setIsInitialized(true);
    };

    // Initialize position on mount
    if (typeof window !== "undefined") {
      initializePosition();
    }

    // Add event listeners
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchstart", handleTouchStart, {
      passive: false,
    });

    // Handle window resize
    const handleResize = () => {
      if (!isInitialized) {
        initializePosition();
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("resize", handleResize);
    };
  }, [isInitialized]);

  // Calculate transition parameters
  const edgeSize = smoothEdge ? spotlightRadius * 0.3 : 0;
  const innerRadius = Math.max(0, spotlightRadius - edgeSize);

  // Create gradient stops with custom opacity
  const createMaskGradient = () => {
    if (!smoothEdge) {
      return `radial-gradient(circle at ${mousePosition.x}px ${
        mousePosition.y
      }px, transparent 0%, transparent ${spotlightRadius}px, rgba(0,0,0,${transitionOpacity}) ${
        spotlightRadius + 1
      }px)`;
    }

    return `radial-gradient(circle at ${mousePosition.x}px ${
      mousePosition.y
    }px, transparent 0%, transparent ${innerRadius}px, rgba(0,0,0,${
      transitionOpacity * 0.3
    }) ${innerRadius + edgeSize * 0.3}px, rgba(0,0,0,${
      transitionOpacity * 0.7
    }) ${
      innerRadius + edgeSize * 0.7
    }px, rgba(0,0,0,${transitionOpacity}) ${spotlightRadius}px)`;
  };

  if (!isInitialized) {
    return null; // Prevent flash before initialization
  }

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-50 transition-colors duration-300 ${className}`}
      style={{
        background: overlayColor,
        WebkitMask: createMaskGradient(),
        mask: createMaskGradient(),
      }}
      data-spotlight-mode={overlayMode}
    />
  );
}
