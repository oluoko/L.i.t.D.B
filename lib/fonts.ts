import localFont from "next/font/local";

// Arima Font
export const arima = localFont({
  src: [
    {
      path: "../app/_fonts/Arima/static/Arima-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../app/_fonts/Arima/static/Arima-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../app/_fonts/Arima/static/Arima-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../app/_fonts/Arima/static/Arima-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../app/_fonts/Arima/static/Arima-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../app/_fonts/Arima/static/Arima-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../app/_fonts/Arima/static/Arima-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-arima",
  display: "swap",
});

// EB Garamond Font (great for reading)
export const ebGaramond = localFont({
  src: [
    {
      path: "../app/_fonts/EB_Garamond/static/EBGaramond-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../app/_fonts/EB_Garamond/static/EBGaramond-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../app/_fonts/EB_Garamond/static/EBGaramond-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../app/_fonts/EB_Garamond/static/EBGaramond-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../app/_fonts/EB_Garamond/static/EBGaramond-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../app/_fonts/EB_Garamond/static/EBGaramond-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../app/_fonts/EB_Garamond/static/EBGaramond-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../app/_fonts/EB_Garamond/static/EBGaramond-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-eb-garamond",
  display: "swap",
});

// Outfit Font (modern sans-serif)
export const outfit = localFont({
  src: [
    {
      path: "../app/_fonts/Outfit/static/Outfit-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../app/_fonts/Outfit/static/Outfit-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../app/_fonts/Outfit/static/Outfit-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../app/_fonts/Outfit/static/Outfit-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../app/_fonts/Outfit/static/Outfit-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../app/_fonts/Outfit/static/Outfit-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../app/_fonts/Outfit/static/Outfit-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../app/_fonts/Outfit/static/Outfit-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../app/_fonts/Outfit/static/Outfit-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-outfit",
  display: "swap",
});

// Kanit Font (clean, readable)
export const kanit = localFont({
  src: [
    {
      path: "../app/_fonts/Kanit/Kanit-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../app/_fonts/Kanit/Kanit-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../app/_fonts/Kanit/Kanit-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../app/_fonts/Kanit/Kanit-ExtraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../app/_fonts/Kanit/Kanit-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../app/_fonts/Kanit/Kanit-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../app/_fonts/Kanit/Kanit-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../app/_fonts/Kanit/Kanit-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../app/_fonts/Kanit/Kanit-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../app/_fonts/Kanit/Kanit-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../app/_fonts/Kanit/Kanit-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../app/_fonts/Kanit/Kanit-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../app/_fonts/Kanit/Kanit-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../app/_fonts/Kanit/Kanit-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-kanit",
  display: "swap",
});

// Geologica Font (unique, modern)
export const geologica = localFont({
  src: "../app/_fonts/Geologica/Geologica-VariableFont_CRSV,SHRP,slnt,wght.ttf",
  variable: "--font-geologica",
  display: "swap",
});

// Boldonse Font (decorative)
export const boldonse = localFont({
  src: "../app/_fonts/Boldonse/Boldonse-Regular.ttf",
  variable: "--font-boldonse",
  display: "swap",
});

// Export all font variables for CSS
export const fontVariables = [
  arima.variable,
  ebGaramond.variable,
  outfit.variable,
  kanit.variable,
  geologica.variable,
  boldonse.variable,
].join(" ");

// Font configurations for different use cases
export const fontConfigs = {
  heading: {
    primary: "var(--font-outfit)",
    secondary: "var(--font-arima)",
    decorative: "var(--font-boldonse)",
  },
  body: {
    primary: "var(--font-eb-garamond)",
    secondary: "var(--font-kanit)",
    modern: "var(--font-outfit)",
  },
  ui: {
    primary: "var(--font-kanit)",
    secondary: "var(--font-outfit)",
  },
  special: {
    unique: "var(--font-geologica)",
    decorative: "var(--font-boldonse)",
    cursive: "var(--font-arima)",
  },
};
