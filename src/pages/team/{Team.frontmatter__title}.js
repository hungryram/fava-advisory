import * as React from "react"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"

export default function Teamsingle({ data }) {
    return (
        <Layout>
            <div className="uk-section">
                <div className="uk-container uk-container-large">
                    <div className="uk-child-width-1-2@s" data-uk-grid>
                        <div>

                        </div>
                        <div>
                            <div dangerouslySetInnerHTML={{ __html: data.team.childMarkdownRemark.html }} />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
{
    team {
      childMarkdownRemark {
        html
        frontmatter {
          search_engine_optimization {
            title_tag
            meta_description
          }
          title
        }
      }
    }
  }
  
`