import * as React from "react"
import Helmet from "react-helmet"
import "../styles/global.css"
import Navbar from "./Navbar"

export default function Layout({children}) {
    return (
        <>
        <Helmet>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Italiana&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&display=swap" rel="stylesheet"/>
            <style>
                {`
                    :root {
                        --primary-background-color: transparent;
                        --primary-button-text: #fff;
                    }
                `}
            </style>
        </Helmet>
        <Navbar />
            <main>
                {children}
            </main>
        </>
    )
}