import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { fontclash } from "./ui/font";
import Footer from "./ui/footer";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo/moonday-logo.svg";
import sendicon from "../public/icons/send.svg"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moonday - Web3 Design and Marketing Studio",
  description: "Forge Your Web3 Identity - Where Innovative Design and Strategic Social Presence Amplify Your Brand's Voice.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontclash.className} antialiased scroll-smooth`}>
        <header className="flex sticky top-0 justify-between items-center py-6 px-20 md:px-40">
          <Link className="flex items-start justify-start" href="/">
            <Image priority src={logo} width={227} height={96} alt='' className='w-4/5 md:scale-90' />
          </Link>
          <Link href="" target=""
            className="flex buttonBG transition-all justify-center items-center p-0.5 rounded-full overflow-hidden shadow-whitepers active:shadow-none">
            <div className="flex gap-2 transition-all justify-center items-center pr-16 pl-12 py-4 bg-bodybg w-full rounded-full text-label hover:bg-bodybg/[0.96] text-sm font-semibold">
                <Image priority src={sendicon} width={24} height={24} alt='' />
                <span className="inline">Press to chat</span>
            </div>
          </Link>
        </header>
        <main className="flex min-h-screen ">{children}</main>
        <footer className="flex flex-col justify-center items-start gap-8 bg-background py-20 px-20 md:px-40">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
