import * as React from "react"
import Layout from "../components/Layout"
import HomeValueForm from "../components/templates/HomeValueForm"
import PageBanner from "../components/Pagebanner"

export default function HomeValue() {
    return (
        <Layout>
            <PageBanner
                title="Home Valuation"
                description="Get a detailed report with an estimated value of your home. Get informed decisions about selling or refinancing your home by filling out the home valuation form."
            />
            <HomeValueForm />
        </Layout>
    )
}