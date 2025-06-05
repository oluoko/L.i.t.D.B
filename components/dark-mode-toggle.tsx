"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";

export function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Skeleton className="relative bg-accent/70  inline-flex h-8 w-14 items-center rounded-full ">
        <Skeleton className="absolute  size-6 left-1 rounded-full border " />
      </Skeleton>
    );
  }

  const isDark = theme === "dark";

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative h-8 w-14 rounded-full p-0 bg-muted hover:bg-muted/80"
    >
      <div
        className={`absolute top-1 h-6 w-6 rounded-full shadow-sm transition-all duration-300 flex items-center justify-center ${
          isDark ? "left-1 bg-slate-600" : "left-7 bg-orange-500"
        }`}
      >
        {isDark ? (
          <Moon className="h-3 w-3 text-white" />
        ) : (
          <Sun className="h-3 w-3 text-white" />
        )}
      </div>
    </Button>
  );
}
