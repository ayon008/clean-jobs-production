import { Inter, Nunito, Poppins } from 'next/font/google'
import '../globals.css'
import AuthProvider from '@/Providers/AuthProvider'
import Navbar from '@/Shared/Navbar'
import QueryProvider from '@/Providers/QueryProvider'


export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata = {
  title: 'Clean Jobs',
  description: 'Clean,Green,Reliable',
}


export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '900'],
  variable: '--font-poppins',
})

export const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '900'],
  variable: '--font-nunito',
})


export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={`${inter.variable} ${poppins.variable} ${nunito.variable}`}>
        <main className='bg-white overflow-hidden min-h-screen max-w-[1920px] mx-auto'>
          <AuthProvider>
            <QueryProvider>
              <Navbar />
              {children}
            </QueryProvider>
          </AuthProvider>
        </main>
      </body>
    </html>
  )
}