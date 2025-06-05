"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type FontElement =
  | "heading"
  | "subheading"
  | "paragraph"
  | "link"
  | "comment"
  | "quote"
  | "navigation";

export interface FontSettings {
  heading: string;
  subheading: string;
  paragraph: string;
  link: string;
  comment: string;
  quote: string;
  navigation: string;
}

const defaultFontSettings: FontSettings = {
  heading: "var(--font-outfit)",
  subheading: "var(--font-outfit)",
  paragraph: "var(--font-eb-garamond)",
  link: "var(--font-kanit)",
  comment: "var(--font-kanit)",
  quote: "var(--font-eb-garamond)",
  navigation: "var(--font-outfit)",
};

interface FontContextType {
  fontSettings: FontSettings;
  updateFont: (element: FontElement, font: string) => void;
  resetFonts: () => void;
  presets: {
    classic: FontSettings;
    modern: FontSettings;
    readable: FontSettings;
  };
  applyPreset: (preset: keyof FontContextType["presets"]) => void;
}

const FontContext = createContext<FontContextType | undefined>(undefined);

export function FontProvider({ children }: { children: ReactNode }) {
  const [fontSettings, setFontSettings] =
    useState<FontSettings>(defaultFontSettings);

  const presets = {
    classic: {
      heading: "var(--font-eb-garamond)",
      subheading: "var(--font-eb-garamond)",
      paragraph: "var(--font-eb-garamond)",
      link: "var(--font-eb-garamond)",
      comment: "var(--font-kanit)",
      quote: "var(--font-eb-garamond)",
      navigation: "var(--font-outfit)",
    },
    modern: {
      heading: "var(--font-outfit)",
      subheading: "var(--font-outfit)",
      paragraph: "var(--font-kanit)",
      link: "var(--font-outfit)",
      comment: "var(--font-kanit)",
      quote: "var(--font-geologica)",
      navigation: "var(--font-outfit)",
    },
    readable: {
      heading: "var(--font-kanit)",
      subheading: "var(--font-kanit)",
      paragraph: "var(--font-eb-garamond)",
      link: "var(--font-kanit)",
      comment: "var(--font-kanit)",
      quote: "var(--font-eb-garamond)",
      navigation: "var(--font-kanit)",
    },
  };

  const updateFont = (element: FontElement, font: string) => {
    setFontSettings((prev) => ({
      ...prev,
      [element]: font,
    }));
  };

  const resetFonts = () => {
    setFontSettings(defaultFontSettings);
  };

  const applyPreset = (preset: keyof typeof presets) => {
    setFontSettings(presets[preset]);
  };

  return (
    <FontContext.Provider
      value={{
        fontSettings,
        updateFont,
        resetFonts,
        presets,
        applyPreset,
      }}
    >
      {children}
    </FontContext.Provider>
  );
}

export function useFonts() {
  const context = useContext(FontContext);
  if (context === undefined) {
    throw new Error("useFonts must be used within a FontProvider");
  }
  return context;
}
