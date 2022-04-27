import * as React from "react"
import Layout from "../../components/Layout"
import Pagebanner from "../../components/Pagebanner"
import TeamCard from "../../components/templates/TeamCard"

export default function TeamIndex() {
  return (
    <Layout>
      <Pagebanner
        title="Advisory Team"
      />
      <TeamCard />
    </Layout>
  )
}