import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { fetcher } from "@/lib/coingecko.actions";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  variable: "--font-geist-sans",
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
      <body className={`lg:px-4 ${poppins.variable} antialiased`}>
        <Header trendingCoins={trendingCoins} />
        {children}
      </body>
    </html>
  );
}
