"use client";

import SpotlightOverlay from "@/components/spotlight-overlay";
import { Heading } from "@/components/typography";
import { useState } from "react";

export default function Home() {
  const [showSpotlight, setShowSpotlight] = useState(true);
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <Heading className="text-4xl font-black ">
        Light in the Dark Bible
      </Heading>

      {showSpotlight && <SpotlightOverlay />}
    </div>
  );
}
