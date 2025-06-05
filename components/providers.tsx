"use client";

import { FontProvider } from "@/contexts/font-context";
import { ThemeProvider } from "@/components/theme-provider";
import { useTheme } from "next-themes";
import { Toaster } from "sonner";
import { useEffect, useState } from "react";

function ToasterWithInverseTheme() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Toaster position="bottom-center" />;
  }

  return (
    <Toaster
      theme={resolvedTheme === "dark" ? "light" : "dark"}
      position="bottom-center"
    />
  );
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <FontProvider>
        <ToasterWithInverseTheme />
        {children}
      </FontProvider>
    </ThemeProvider>
  );
}
