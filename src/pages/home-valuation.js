import * as React from "react"
import Layout from "../components/Layout"
import HomeValueForm from "../components/templates/HomeValueForm"
import PageBanner from "../components/Pagebanner"

export default function HomeValue() {
    return (
        <Layout>
            <PageBanner
                title="Home Valuation"
            />
            <HomeValueForm />
        </Layout>
    )
}