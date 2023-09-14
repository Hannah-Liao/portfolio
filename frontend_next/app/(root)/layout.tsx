import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";

import "../globals.css";
import { NavBar, Footer, CallToAction } from "@/components/index";

export const metadata: Metadata = {
  title: "Haiying Liao's portfolio",
  description: "Haiying Liao's portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar />

        <main className="fadeIn">
          {children}
          <CallToAction />
        </main>

        <Footer />
        <Toaster />
      </body>
    </html>
  );
}