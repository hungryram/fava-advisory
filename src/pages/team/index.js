import { graphql, Link } from "gatsby"
import * as React from "react"
import Layout from "../../components/Layout"
import Pagebanner from "../../components/Pagebanner"
import Teamcard from "../../templates/TeamCard"

export default function TeamIndex({ data }) {
  const content = data.allTeam
  return (
    <Layout>
      <Pagebanner
        title="Team"
      />
      <div className="uk-section uk-section-large">
        <div className="uk-container uk-container-large">
          <div className="uk-child-width-1-3@s" data-uk-grid>
            {content.nodes.map((node) => {
              return (
                <div>
                  <Link to={"/team" + node.slug}>
                    <div className="uk-card uk-card-default">
                      <div className="uk-card-media-top uk-cover-container">
                        <canvas height="500"></canvas>
                        <img src={node.frontmatter.photo} alt="" data-uk-cover/>
                        <div className="uk-overlay-agent uk-position-cover"></div>

                      </div>
                      <div className="uk-overlay uk-position-bottom uk-light uk-text-center">
                        <h3 className="uk-h4">{node.frontmatter.title}</h3>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
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
          photo
        }
      }
    }
  }
  
`