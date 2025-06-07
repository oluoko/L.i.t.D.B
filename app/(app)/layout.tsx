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
      <div className="h-full flex pt-18">{children}</div>
      {showSpotlight && (
        <SpotlightOverlay
          spotlightRadius={250}
          transitionOpacity={0.9}
          smoothEdge={true}
          invertOnDarkMode={true}
        />
      )}
    </>
  );
}
