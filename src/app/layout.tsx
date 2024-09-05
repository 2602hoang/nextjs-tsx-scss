import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.scss";
import { Header } from "@/components/Header";
import Fotter from "@/components/Fotter";
import { DataContextProvider } from "@/contexts/DataContext";

// Load the Inter and Roboto fonts
const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "NextJS tsx scss",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${roboto.className}`}>
        <DataContextProvider>
          <Header />
          {children}
          <Fotter />
        </DataContextProvider>
      </body>
    </html>
  );
}
