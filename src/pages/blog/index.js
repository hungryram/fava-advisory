import * as React from "react"
import Layout from "../../components/Layout"
import Pagebanner from "../../components/Pagebanner"
import BlogList from "../../components/templates/BlogList"

export default function Blog() {
  return (
    <Layout>
      <Pagebanner 
        title="Latest News"
        description="Stay up-to-date with the latest news and trends in the real estate market."
      />
      <BlogList />
    </Layout>
  )
}