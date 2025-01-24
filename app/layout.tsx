import "./globals.css";

import type { Metadata } from "next";
import localFont from "next/font/local";
import { NuqsAdapter } from 'nuqs/adapters/next/app'

import { AppSidebar } from "@/src/components/app-sidebar/app-sidebar";
import { Footer } from "@/src/components/footer/footer";
import { Header } from "@/src/components/header/header";
import { SidebarProvider, SidebarTrigger } from "@/src/components/ui/sidebar";
import { Toaster } from "@/src/components/ui/toaster";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const montserratRegular = localFont({
  src: "./fonts/montserrat-v29-latin-regular.woff2",
  variable: "--font-montserrat-regular",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserratRegular.variable} size-full max-h-screen bg-[url('./assets/background.jpg')] font-[family-name:var(--font-montserrat-regular)] antialiased md:h-screen`}
      >
        <NuqsAdapter>
          <div className="flex size-full flex-col justify-between">
            <Header />
            <main className="flex h-full items-center justify-center px-10">
              <AppSidebar />
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </NuqsAdapter>
      </body>
    </html>
  );
}