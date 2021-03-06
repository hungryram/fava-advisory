import { Link } from "gatsby"
import * as React from "react"
import Layout from "../components/Layout"
import Pagebanner from "../components/Pagebanner"
import Seo from "../components/Seo"

export default function ThankYou() {
    return (
        <Layout>
            <Seo
                title="Page Not Found"
                description="Looks like the page has either been removed or changed."
            />
            <Pagebanner
                title="Page Not Found"
                />
            <div className="uk-section uk-section-large">
                <div className="uk-container uk-text-center">
                    <h2>404 - Page not found</h2>
                    <p>Looks like the page may have been moved or deleted. Check back on our other resources</p>
                    <Link to="/" className="uk-button uk-button-primary">Back Home</Link>
                </div>
            </div>
        </Layout>
    )
}