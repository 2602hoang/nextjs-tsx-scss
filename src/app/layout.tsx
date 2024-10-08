import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "@/style/index.scss";
import { AuthProvider } from "@/contexts/AuthContext";
import AosClient from "@/components/slide/AosClient";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className}`}>
        <AuthProvider>
          <AosClient>{children}</AosClient>
        </AuthProvider>
      </body>
    </html>
  );
}
