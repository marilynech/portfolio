// src/app/layout.tsx
import "./globals.css";
import { googleSans } from "./fonts";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={googleSans.variable}>
      <body className="min-h-screen font-sans text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}

