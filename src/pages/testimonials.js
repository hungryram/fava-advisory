import * as React from "react"
import Layout from "../components/Layout"
import Pagebanner from "../components/Pagebanner"
import Review from "../components/templates/Testimonials"

export default function Testimonials() {
    return (
        <Layout>
            <Pagebanner 
                title="Client Testimonials"
                description="At Fava Advisory, we pride ourselves on providing top-notch real estate services that are reliable and trustworthy. Our clients love working with us because they know they can trust us to take care of their needs and make the best decisions possible."
            />
            <Review />
        </Layout>
    )
}