import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "../providers/ChakraProvider";
import { NextProvider } from "@/providers/NextProvider";
import theme from '@/styles/chakraTheme'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tutorial Hub",
  description: "Tutorial Hub is now testing mode",

};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <NextProvider>
        <Providers theme={theme}>
              {children}
            </Providers>
        </NextProvider>
          

      </body>
    </html>
  );
}
