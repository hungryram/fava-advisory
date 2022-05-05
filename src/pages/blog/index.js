import * as React from "react"
import Layout from "../../components/Layout"
import Pagebanner from "../../components/Pagebanner"
import Seo from "../../components/Seo"
import BlogList from "../../components/templates/BlogList"

export default function Blog() {
  return (
    <Layout>
      <Seo
        title="Latest News | Fava Advisory"
        description="Stay up-to-date with the latest news and trends in the real estate market."
      />
      <Pagebanner 
        title="Latest News"
        description="Stay up-to-date with the latest news and trends in the real estate market."
      />
      <BlogList />
    </Layout>
  )
}