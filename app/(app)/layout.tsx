"use client";

import { NavBar } from "@/components/nav-bar";
import SpotlightOverlay from "@/components/spotlight-overlay";
import { NavigationLink } from "@/components/typography";
import { useState } from "react";

export default function BrowseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSpotlight, setShowSpotlight] = useState(true);
  return (
    <>
      <NavBar>
        <div className="flex items-center space-x-4">
          <NavigationLink href="/">Home</NavigationLink>
          <NavigationLink href="/about">About</NavigationLink>
          <NavigationLink href="/contact">Contact</NavigationLink>
          <NavigationLink href="/blog">Blog</NavigationLink>
        </div>
      </NavBar>
      <div className="h-full w-full flex flex-col items-center justify-center pt-18">
        {children}
      </div>
      {showSpotlight && (
        <SpotlightOverlay
          spotlightRadius={200}
          transitionOpacity={0.8}
          smoothEdge={true}
          invertOnDarkMode={true}
        />
      )}
    </>
  );
}
