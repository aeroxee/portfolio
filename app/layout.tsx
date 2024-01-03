import Container from "@/components/Container"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import "@fortawesome/fontawesome-svg-core/styles.css"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-800" style={poppins.style}>
        <Navbar />
        <Container>{children}</Container>
        <Footer />
      </body>
    </html>
  )
}