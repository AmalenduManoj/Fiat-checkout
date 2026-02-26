import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import CheckoutCard from "./component/CheckoutCard";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${inter.className} flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black`}
    >
        <CheckoutCard />
    </div>
  );
}
