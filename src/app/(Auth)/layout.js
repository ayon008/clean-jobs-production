import { Inter, Nunito, Poppins } from 'next/font/google'
import '../globals.css'
import AuthProvider from '@/Providers/AuthProvider'


export const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter'
})

export const metadata = {
    title: 'Buy Janitorial Appointments & Leads | Grow Your Cleaning Business',
    description: 'Boost your cleaning business with qualified janitorial appointments and leads. Connect with clients actively seeking janitorial services and expand your business effortlessly.',
    keywords: 'janitorial leads, janitorial appointments, buy cleaning leads, janitorial sales leads, commercial cleaning appointments, grow cleaning business, cleaning service leads',
    openGraph: {
        title: 'Buy Janitorial Appointments & Leads to Grow Your Business',
        description: 'Access high-quality janitorial leads and appointments to connect with new clients and expand your cleaning business. Reliable leads for sustainable growth.',
        url: '',
        images: [
            {
                url: '../../../public/assets/Vector.png',
                width: 800,
                height: 600,
                alt: 'Professional janitorial team at work',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Grow Your Cleaning Business with Janitorial Leads & Appointments',
        description: 'Purchase janitorial appointments and leads to connect with clients and drive business growth.',
        image: '../../../public/assets/Vector.png',
    },
};



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
                <main className='bg-white overflow-hidden'>
                    <AuthProvider>
                        {children}
                    </AuthProvider>
                </main>
            </body>
        </html>
    )
}
