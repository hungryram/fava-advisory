import * as React from "react"
import Layout from "../../components/Layout"
import Pagebanner from "../../components/Pagebanner"
import ListingCard from "../../components/templates/ListingCard"
import { graphql } from "gatsby"
import Seo from "../../components/Seo"

export default function ListingList({ data }) {
  return (
    <Layout>
      <Seo 
        title="Exclusive Listings by Fava Advisory | Fava Advisory"
        description="The Fava Advisory represents a selection of beautiful homes in and around New York City. If you're looking to buy or list your home you'll want to work with the Fava Advisory."
      />
      <Pagebanner 
        title="Exclusive Listings"
        description="The Fava Advisory represents a selection of beautiful homes in and around New York City. If you're looking to buy or list your home you'll want to work with the Fava Advisory. Contact us today for a personalized home valuation or to discuss your buying goals. "
      />
      <ListingCard />
    </Layout>
  )
}