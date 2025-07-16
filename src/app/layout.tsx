import type { Metadata } from 'next';
import { Poppins, Roboto } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';

const roboto = Roboto({
    variable: '--font-roboto',
    subsets: ['latin'],
});

const poppins = Poppins({
    variable: '--font-poppins',
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
    title: 'Erwan Soulas - Développeur Web',
    description:
        "Portfolio d'Erwan Soulas, développeur web passionné par la création d'expériences numériques innovantes.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body
                className={`${roboto.variable} ${poppins.variable} antialiased`}
            >
                <Header />
                {children}
            </body>
        </html>
    );
}
