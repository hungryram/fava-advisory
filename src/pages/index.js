import * as React from "react"
import Layout from "../components/Layout"
import Features from "../components/home/Features"
import Hero from "../components/home/Hero"
import Intro from "../components/home/Intro"
import Team from "../components/home/Team"
import Seo from "../components/Seo"
import HomeSeo from "../../data/seo.json"
import Instagram from "../components/templates/Instagram"

export default function Home() {
  const schemaMarkup =
  {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": "Fava Advisory",
    "url": "https://www.favaadvisory.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.favaadvisory.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }


  return (
    <Layout>

      <Seo
        schemaMarkup={schemaMarkup}
        title={HomeSeo.title_tag}
        description={HomeSeo.meta_description}
      />

      <Hero />

      <Intro />

      <Team />

      <Features />

      <Instagram />

    </Layout>
  )
}