import * as React from "react"
import Layout from "../../components/Layout"
import Pagebanner from "../../components/Pagebanner"
import ListingCard from "../../components/templates/ListingCard"

export default function ListingList({ data }) {
  return (
    <Layout>
      <Pagebanner 
        title="Exclusive Listings"
        description="If you're looking for an exclusive listing in New York, you'll want to work with the Fava Advisory Team who has access to the most up-to-date information."
      />
      <ListingCard />
    </Layout>
  )
}