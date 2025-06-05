"use client";

import React from "react";
import { useFonts } from "@/contexts/font-context";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export function Heading({ children, className = "" }: TypographyProps) {
  const { fontSettings } = useFonts();
  return (
    <h1
      className={`text-3xl font-bold ${className}`}
      style={{ fontFamily: fontSettings.heading }}
    >
      {children}
    </h1>
  );
}

export function Subheading({ children, className = "" }: TypographyProps) {
  const { fontSettings } = useFonts();
  return (
    <h2
      className={`text-xl font-semibold ${className}`}
      style={{ fontFamily: fontSettings.subheading }}
    >
      {children}
    </h2>
  );
}

export function Paragraph({ children, className = "" }: TypographyProps) {
  const { fontSettings } = useFonts();
  return (
    <p
      className={`text-base leading-relaxed ${className}`}
      style={{ fontFamily: fontSettings.paragraph }}
    >
      {children}
    </p>
  );
}

export function StyledLink({
  children,
  className = "",
  href,
}: TypographyProps & { href?: string }) {
  const { fontSettings } = useFonts();
  return (
    <Link
      href={href || ""}
      className={`text-primary hover:text-primary/80 underline ${className}`}
      style={{ fontFamily: fontSettings.link }}
    >
      {children}
    </Link>
  );
}

export function ButtonLink({
  children,
  className = "",
}: TypographyProps & { href?: string }) {
  const { fontSettings } = useFonts();
  return (
    <Button
      className={`inline-block px-4 py-2  ${className}`}
      variant="ghost"
      style={{ fontFamily: fontSettings.link }}
    >
      {children}
    </Button>
  );
}

export function SpanLink({
  children,
  className = "",
}: TypographyProps & { href?: string }) {
  const { fontSettings } = useFonts();
  return (
    <span
      className={`py-1 px-2 rounded hover:bg-accent/80 text-primary hover:text-primary/80 underline ${className}`}
      style={{ fontFamily: fontSettings.link }}
    >
      {children}
    </span>
  );
}

export function NavigationLink({
  children,
  className = "",
  href,
}: TypographyProps & { href?: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const { fontSettings } = useFonts();
  return (
    <Link
      href={href || ""}
      className={cn(
        "hover:text-foreground/60 hover:border-b hover:border-foreground/60",
        isActive && "text-foreground/60 border-b border-foreground/60",
        className
      )}
      style={{ fontFamily: fontSettings.navigation }}
    >
      {children}
    </Link>
  );
}

export function Comment({ children, className = "" }: TypographyProps) {
  const { fontSettings } = useFonts();
  return (
    <div
      className={`text-sm text-gray-600 ${className}`}
      style={{ fontFamily: fontSettings.comment }}
    >
      {children}
    </div>
  );
}

export function Quote({ children, className = "" }: TypographyProps) {
  const { fontSettings } = useFonts();
  return (
    <blockquote
      className={`text-lg italic border-l-4 border-gray-300 pl-4 ${className}`}
      style={{ fontFamily: fontSettings.quote }}
    >
      {children}
    </blockquote>
  );
}

export function Navigation({ children, className = "" }: TypographyProps) {
  const { fontSettings } = useFonts();
  return (
    <nav
      className={`${className}`}
      style={{ fontFamily: fontSettings.navigation }}
    >
      {children}
    </nav>
  );
}
