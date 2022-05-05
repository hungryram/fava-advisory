import { graphql, Link } from "gatsby"
import * as React from "react"
import Layout from "../../components/Layout"
import Pagebanner from "../../components/Pagebanner"
import Seo from "../../components/Seo"

export default function LegalIndex({ data }) {
    return (
        <Layout>
            <Seo
                title="Legal Policies"
                description="Review legal policies about our website and services. We ask that you read each one carefully and encourage visitors to contact us for any inquiries and/or concerns."
            />
            <Pagebanner 
                title="Legal Policies"
                description="Review legal policies about our website and services. We ask that you read each one carefully and encourage visitors to contact us for any inquiries and/or concerns."
            />
            <div className="uk-section uk-section-large">
                <div className="uk-container uk-container-xsmall">
                    <div className="uk-text-center">
                        <ul className="uk-list uk-list-divider">
                        {data.allLegal.nodes.map((node) => {
                            return (
                                <li>
                                    <Link to={"/legal" + node.slug} className="uk-link-reset uk-h4">{node.frontmatter.title}</Link>
                                </li>
                            )
                        })}
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
{
    allLegal {
      nodes {
        slug
        frontmatter {
          title
        }
      }
    }
  }
  
`