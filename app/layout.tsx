// app/layout.tsx

import './globals.css'
import { ThemeProvider } from "@/components/ThemeProvider"
import { cn } from '@/lib/utils'
import { Inter as FontSans } from "next/font/google"
import NavBar from "@/components/Navbar";

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Flutter Developer Portfolio',
  description: 'Portfolio of a Full-stack Flutter Developer',
}

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-p-20 scroll-smooth'>
     <body className={cn(
          "min-h-screen bg-customback antialiased",
          fontSans.variable
        )}>
           <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange>

          <NavBar/>
          {children}
          </ThemeProvider>
          
          </body>
    </html>
  )
}