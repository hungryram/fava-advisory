import * as React from "react"
import Layout from "../../components/Layout"
import Pagebanner from "../../components/Pagebanner"
import TeamCard from "../../components/templates/TeamCard"

export default function TeamIndex() {
  return (
    <Layout>
      <Pagebanner
        title="Advisory Team"
        description=" We're a dynamic group of full-time real estate professionals who provide a highly personalized advisory service. We focus on curated real estate advice based on current marketing trends and creative marketing strategies."
      />
      <TeamCard />
    </Layout>
  )
}