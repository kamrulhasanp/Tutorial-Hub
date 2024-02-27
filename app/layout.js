import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "../providers/ChakraProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tutorial Hub",
  description: "Tutorial Hub is now testing mode",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        
        </Providers>
        </body>
    </html>
  );
}
