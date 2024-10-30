import { Anton, Inter, Nunito, Poppins } from 'next/font/google'
import '../globals.css'
import AuthProvider from '@/Providers/AuthProvider'
import Navbar from '@/Shared/Navbar'
import QueryProvider from '@/Providers/QueryProvider'


export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata = {
  title: 'Janitorial Appointment Services | Find Reliable Cleaning Leads',
  description: 'Discover reliable janitorial appointment services and cleaning leads tailored for your business needs. Connect with decision-makers and maximize your cleaning opportunities effortlessly.',
}


export const anton = Anton({
  subsets: ['latin'],  // The subsets of the font you want to load
  weight: '400',       // Specify the weight as a string, not as an array
});


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
        <main className='overflow-hidden min-h-screen max-w-[1920px] mx-auto bg-white'>
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
