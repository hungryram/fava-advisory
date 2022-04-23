import { graphql, Link } from "gatsby"
import * as React from "react"
import Layout from "../../components/Layout"

export default function TeamIndex({ data }) {
    const content = data.allTeam
    return (
        <Layout>
            <div className="uk-section uk-section-large">
                <div className="uk-container uk-container-large">
                    {content.nodes.map((node) => {
                        return (
                            <Link to={"/team" + node.slug }>{node.frontmatter.title}</Link>
                        )
                    })}
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
{
    allTeam {
      nodes {
        slug
        frontmatter {
          search_engine_optimization {
            title_tag
          }
          title
        }
      }
    }
  }
  
`