"use client";

import { useEffect, useState } from "react";

interface LoadingDotsProps {
  text: string;
  dotNumber?: number;
  size?:
    | "xs"
    | "sm"
    | "base"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl";
}

export default function LoadingDots({
  text,
  dotNumber = 4,
  size = "base",
}: LoadingDotsProps) {
  const [dots, setDots] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev % dotNumber) + 1);
    }, 500);
    return () => clearInterval(interval);
  }, [dotNumber]);

  const sizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
  };

  return (
    <span
      className={`inline-block animate-pulse font-bold ${sizeClasses[size]}`}
    >
      {text}
      {".".repeat(dots)}
    </span>
  );
}
