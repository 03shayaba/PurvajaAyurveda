import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import SmoothScroll from "@/components/SmoothScroll";
import PremiumUI from "@/components/PremiumUI";


const dm_sans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});



export const metadata = {
  title: "Purvaj Ayurveda - Premium Herbal Supplements for Natural Wellness",
  description: "Discover Purvaj Ayurveda - Premium herbal supplements for natural wellness. Plant-based formulations, 100% vegetarian, clinically proven.",
  icons: {
    icon: '/products/profile.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dm_sans.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <SmoothScroll>
          <CartProvider>
            <PremiumUI />
            <Navbar />
            <main>{children}</main>
            <Footer />
          </CartProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
