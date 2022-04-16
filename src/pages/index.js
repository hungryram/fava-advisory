import * as React from "react"
import Layout from "../components/Layout"
import Features from "../templates/home/Features"
import Hero from "../templates/home/Hero"
import Intro from "../templates/home/Intro"
import Team from "../templates/home/Team"

export default function Home() {
  return (
    <Layout>
      
      <Hero />

      <Intro />

      <Team />

      <Features />

    </Layout>
  )
}