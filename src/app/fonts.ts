// src/app/fonts.ts
import localFont from "next/font/local";

export const googleSans = localFont({
  variable: "--font-google-sans",
  display: "swap",
  src: [
    { path: "../../public/fonts/GoogleSans_17pt-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/GoogleSans-Bold.ttf", weight: "700", style: "normal" },
    { path: "../../public/fonts/GoogleSans_17pt-Italic.ttf", weight: "400", style: "italic" },
    { path: "../../public/fonts/GoogleSans_17pt-SemiBoldItalic.ttf", weight: "600", style: "italic" },
  ],
});
