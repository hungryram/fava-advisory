import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../components/Layout"
import Pagebanner from "../components/Pagebanner"
import Seo from "../components/Seo"
import Review from "../components/templates/Testimonials"

export default function Testimonials({ data }) {
    const seo = data.markdownRemark.frontmatter.search_engine_optimization
    const frontMatter = data.markdownRemark.frontmatter
    return (
        <Layout>
            <Seo
                title={seo.title_tag}
                description={seo.meta_description}
            />
            <Pagebanner 
                title="Client Testimonials"
                description={frontMatter.description}
            />
            <Review />
        </Layout>
    )
}

export const query = graphql`
{
    markdownRemark(fileAbsolutePath: {regex: "content/testimonials/"}) {
      frontmatter {
        description
        search_engine_optimization {
          title_tag
          meta_description
        }
      }
    }
  }
`