import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { fontclash } from "./ui/font";
import Footer from "./ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moonday Web3 Design and Marketing Studio",
  description: "Forge Your Web3 Identity - Where Innovative Design and Strategic Social Presence Amplify Your Brand's Voice.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontclash.className} antialiased overflow-x-hidden scroll-smooth`}>
        <header></header>
        <main className="flex min-h-screen ">{children}</main>
        <footer className="flex flex-col justify-center items-start gap-8 bg-background py-20 px-20 md:px-40">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
