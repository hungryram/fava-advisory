import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Contact from "../components/templates/Contact"
import { graphql } from "gatsby"

export default function ContactPage({ data }) {
    const frontMatter = data.markdownRemark.frontmatter
    const seo = data.markdownRemark.frontmatter.search_engine_optimization
    return (
        <Layout>
            <Seo 
                title={seo.title_tag}
                description={seo.meta_description}
            />
            <Contact 
            />
        </Layout>
    )
}

export const query = graphql`
{
    markdownRemark(fileAbsolutePath: {regex: "content/contact/"}) {
      frontmatter {
        search_engine_optimization {
          meta_description
          title_tag
        }
        title
        heading
      }
    }
  }
  
`