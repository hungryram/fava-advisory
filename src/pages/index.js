import * as React from "react"
import Layout from "../components/Layout"
import Hero from "../templates/home/Hero"
import Intro from "../templates/home/Intro"

export default function Home() {
  return (
    <Layout>
      
      <Hero />

      <Intro />

    </Layout>
  )
}