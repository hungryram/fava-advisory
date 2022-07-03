import * as React from "react"
import Helmet from "react-helmet"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout({children}) {
    return (
        <>
        <Helmet>
            <style>
                {`
                    :root {
                        --primary-background-color: transparent;
                        --primary-button-text: #000;
                        --primary-color: #111820;
                    }
                `}
            </style>
        </Helmet>
        <Navbar />
            <main>
                {children}
            </main>
        <Footer />
        </>
    )
}