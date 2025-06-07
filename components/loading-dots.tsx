"use client";

import { useEffect, useState } from "react";

interface LoadingDotsProps {
  text: string;
  dotNumber?: number;
}
export default function LoadingDots({ text, dotNumber = 4 }: LoadingDotsProps) {
  const [dots, setDots] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev % dotNumber) + 1);
    }, 500);
    return () => clearInterval(interval);
  }, [dotNumber]);

  return (
    <span className="inline-block animate-pulse font-bold">
      {text}
      {".".repeat(dots)}
    </span>
  );
}
