import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { AxiomWebVitals } from "next-axiom";

// import { ThemeProvider, ThemeToggle } from "@acme/ui/theme";
// import { Toaster } from "@acme/ui/toast";

import { env } from "~/env";
import { TRPCReactProvider } from "~/trpc/react";

import "~/app/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    env.VERCEL_ENV === "production" ? "" : "http://localhost:3000",
  ),
  title: "",
  description: "",
  openGraph: {
    title: "",
    description: "",
    url: "",
    siteName: "",
  },
  twitter: {
    card: "summary_large_image",
    site: "@",
    creator: "@",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <AxiomWebVitals />
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
        <ClerkProvider>
          <TRPCReactProvider>{props.children}</TRPCReactProvider>
          {/* <div className="absolute bottom-4 right-4">
            <ThemeToggle />
          </div>
            <Toaster /> */}
        </ClerkProvider>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
