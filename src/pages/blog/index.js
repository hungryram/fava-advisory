import * as React from "react"
import Layout from "../../components/Layout"
import Pagebanner from "../../components/Pagebanner"
import BlogList from "../../components/templates/BlogList"

export default function Blog() {
  return (
    <Layout>
      <Pagebanner 
        title="Latest News"
      />
      <BlogList />
    </Layout>
  )
}