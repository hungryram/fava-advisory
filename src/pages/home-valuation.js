import * as React from "react"
import Layout from "../components/Layout"
import HomeValueForm from "../components/templates/HomeValueForm"
import PageBanner from "../components/Pagebanner"
import Seo from "../components/Seo"
import { graphql } from "gatsby"

export default function HomeValue({ data }) {
    const frontMatter = data.markdownRemark.frontmatter
    const seo = data.markdownRemark.frontmatter.search_engine_optimization

    return (
        <Layout>
            <Seo 
                title={seo.title_tag}
                description={seo.meta_description}
            />
            <PageBanner
                title={frontMatter.title}
                description={frontMatter.description}
            />
            <HomeValueForm />
        </Layout>
    )
}

export const query = graphql`
{
    markdownRemark(fileAbsolutePath: {regex: "content/home-valuation/"}) {
      frontmatter {
        search_engine_optimization {
          meta_description
          title_tag
        }
        title
        description
      }
    }
  }
  
`