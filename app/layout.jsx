import {satoshi, monument} from "./font";
import './globals.css'
import NavBar from "../app/components/NavBar";


export const metadata = {
    title: 'Creon',
    description: 'Empowering AI-Crypto innovations and integrating AI into Crypto',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={`relative ${monument.variable} ${satoshi.variable}`}>
        <NavBar/>
        {children}
        </body>
        </html>
    )
}
