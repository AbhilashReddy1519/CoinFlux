import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { fetcher } from "@/lib/coingecko.actions";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coin Flux",
  description:
    "Crypto Screener App with built-in High Frequency Terminal & DashBoard",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let trendingCoins: TrendingCoin[] = [];

  try {
    const response = await fetcher<{ coins: TrendingCoin[] }>(
      "/search/trending",
      undefined,
      300
    );
    trendingCoins = response.coins || [];
  } catch (error) {
    console.error("Error fetching trending coins for header:", error);
  }

  return (
    <html lang="en" className="dark">
      <body
        className={`lg:px-4 ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header trendingCoins={trendingCoins} />
        {children}
      </body>
    </html>
  );
}
