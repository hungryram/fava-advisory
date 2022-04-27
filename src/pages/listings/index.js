import * as React from "react"
import Layout from "../../components/Layout"
import Pagebanner from "../../components/Pagebanner"
import ListingCard from "../../components/templates/ListingCard"

export default function ListingList({ data }) {
  return (
    <Layout>
      <Pagebanner 
        title="Exclusive Listings"
      />
      <ListingCard />
    </Layout>
  )
}