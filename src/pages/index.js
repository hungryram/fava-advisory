import * as React from "react"
import Layout from "../components/Layout"
import Features from "../components/home/Features"
import Hero from "../components/home/Hero"
import Intro from "../components/home/Intro"
import Team from "../components/home/Team"

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