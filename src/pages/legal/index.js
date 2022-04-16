import { graphql, Link } from "gatsby"
import * as React from "react"
import Layout from "../../components/Layout"
import Pagebanner from "../../components/Pagebanner"

export default function LegalIndex({ data }) {
    return (
        <Layout>
            <Pagebanner />
            <div className="uk-section">
                <div className="uk-container">
                    <div className="uk-text-center">
                        {data.allMarkdownRemark.nodes.map((node) => {
                            return (
                                <Link to="">{node.frontmatter.title}</Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
{
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/content/legal/"}}) {
      nodes {
        frontmatter {
          title
        }
      }
    }
  }
  
`