import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import Navigation from "@/components/Navigation";
import ParticleBackground from "@/components/ParticleBackground";

export const metadata: Metadata = {
  title: "The Art of Science | Naman Beri - Portfolio",
  description: "Portfolio of Naman Beri - B.Sc. (Hons) Electronics student at Acharya Narendra Dev College & IIT Madras, specializing in electronics, robotics, data science, and AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        <Navigation />
        <main className="relative">
          {children}
        </main>
        <VisualEditsMessenger />
      </body>
    </html>
  );
}