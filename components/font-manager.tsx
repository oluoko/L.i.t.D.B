"use client";

import React from "react";
import { useFonts, FontElement } from "@/contexts/font-context";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Settings } from "lucide-react";
import { SpanLink } from "@/components/typography";

const availableFonts = [
  { name: "EB Garamond", value: "var(--font-eb-garamond)", category: "serif" },
  { name: "Outfit", value: "var(--font-outfit)", category: "sans-serif" },
  { name: "Kanit", value: "var(--font-kanit)", category: "sans-serif" },
  { name: "Arima", value: "var(--font-arima)", category: "display" },
  { name: "Geologica", value: "var(--font-geologica)", category: "modern" },
  { name: "Boldonse", value: "var(--font-boldonse)", category: "decorative" },
];

const fontElements: { key: FontElement; label: string; description: string }[] =
  [
    { key: "heading", label: "Main Headings", description: "H1, H2 titles" },
    { key: "subheading", label: "Subheadings", description: "H3, H4, H5, H6" },
    {
      key: "paragraph",
      label: "Body Text",
      description: "Main content paragraphs",
    },
    {
      key: "link",
      label: "Links",
      description: "Navigation and content links",
    },
    {
      key: "comment",
      label: "Comments",
      description: "User comments and metadata",
    },
    {
      key: "quote",
      label: "Quotes",
      description: "Bible verses and blockquotes",
    },
    {
      key: "navigation",
      label: "Navigation",
      description: "Menu and navigation items",
    },
  ];

export default function FontManager() {
  const { fontSettings, updateFont, resetFonts, applyPreset } = useFonts();

  return (
    <Dialog>
      <DialogTrigger>
        <SpanLink className="flex items-center">
          <Settings className="size-4 mr-1" />
          Font Settings
        </SpanLink>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Settings className="size-4" />
            Font Settings
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Presets */}
          <div>
            <Label className="text-base font-medium mb-3 block">
              Quick Presets
            </Label>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => applyPreset("classic")}
                className="bg-amber-50 text-amber-700 hover:bg-amber-100 border-amber-200"
              >
                Classic
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => applyPreset("modern")}
                className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200"
              >
                Modern
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => applyPreset("readable")}
                className="bg-green-50 text-green-700 hover:bg-green-100 border-green-200"
              >
                Readable
              </Button>
              <Button variant="outline" size="sm" onClick={resetFonts}>
                Reset to Default
              </Button>
            </div>
          </div>

          {/* Individual Font Settings */}
          <div>
            <Label className="text-base font-medium mb-3 block">
              Customize Individual Elements
            </Label>
            <div className="space-y-6">
              {fontElements.map(({ key, label, description }) => (
                <div key={key} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label
                        htmlFor={`font-${key}`}
                        className="text-sm font-medium"
                      >
                        {label}
                      </Label>
                      <div className="text-xs text-muted-foreground">
                        {description}
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {availableFonts.find((f) => f.value === fontSettings[key])
                        ?.category || "custom"}
                    </Badge>
                  </div>

                  <Select
                    value={fontSettings[key]}
                    onValueChange={(value) => updateFont(key, value)}
                  >
                    <SelectTrigger id={`font-${key}`}>
                      <SelectValue placeholder="Select a font" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableFonts.map((font) => (
                        <SelectItem key={font.value} value={font.value}>
                          <div className="flex items-center justify-between w-full">
                            <span>{font.name}</span>
                            <Badge variant="secondary" className="ml-2 text-xs">
                              {font.category}
                            </Badge>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <div
                    className="text-sm p-3 bg-muted rounded-md border"
                    style={{ fontFamily: fontSettings[key] }}
                  >
                    <div className="text-muted-foreground text-xs mb-1">
                      Preview:
                    </div>
                    <div>The quick brown fox jumps over the lazy dog</div>
                    <div className="text-xs mt-1 italic">
                      "For God so loved the world..." - John 3:16
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
