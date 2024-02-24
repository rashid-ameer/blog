import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Profile from "./components/Profile";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Blog",
  description: "Blog created by Rashid Ameer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Profile />
        {children}
      </body>
    </html>
  );
}
