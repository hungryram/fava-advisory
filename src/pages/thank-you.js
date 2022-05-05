import { Link } from "gatsby"
import * as React from "react"
import Layout from "../components/Layout"
import Pagebanner from "../components/Pagebanner"
import Seo from "../components/Seo"

export default function ThankYou() {
    return (
        <Layout>
            <Seo
                title="Thank you"
                description="Thank you for submitting the form. We'll get back to you as soon as possible!"
            />
            <Pagebanner
                title="Thank you"
                />
            <div className="uk-section uk-section-large">
                <div className="uk-container uk-text-center">
                    <h2>Thank you</h2>
                    <p>Our team will get back to you as soon as possible.</p>
                    <Link to="/" className="uk-button uk-button-primary">Back Home</Link>
                </div>
            </div>
        </Layout>
    )
}