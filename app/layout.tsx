import { Inter, JetBrains_Mono } from "next/font/google";
import Header from "~/components/header";
import Footer from "~/components/footer";
import GoogleAnalytics from "~/components/GoogleAnalytics";
import "~/styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Alp Ozkan",
    default:
      "Alp Ozkan - Product Manager, Software Engineer and Web3 Enthusiast", // a default is required when creating a template"
  },
  description:
    "Website of Alp Ozkan: Product Manager living in Istanbul, passionate about UX, Software Development and Web3.",
  icons: {
    shortcut: "/favicon.ico",
  },
};

const inter = Inter({
  variable: "--font-inter",
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains_mono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${jetbrains_mono.variable}`}
      style={{ colorScheme: "dark" }}
    >
      <head />
      <body className="font-body debug-screens bg-gray-900 px-8 text-gray-400 sm:px-8 md:px-8 lg:px-16 2xs:px-4 xs:px-4">
        <GoogleAnalytics
          GA_TRACKING_ID={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID as string}
        />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
