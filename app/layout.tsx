
import { Nunito } from "next/font/google";


import "./globals.css";



export const metadata: Metadata = {
  title: "Guestघर",
  description: "A site with lots of places that will make ur vacation Legendary!",
};

const font = Nunito({
  subsets: ["latin"],
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
