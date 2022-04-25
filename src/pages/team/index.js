import { graphql, Link } from "gatsby"
import * as React from "react"
import Layout from "../../components/Layout"
import Teamcard from "../../templates/TeamCard"

export default function TeamIndex({ data }) {
    const content = data.allTeam
    return (
        <Layout>
            <div className="uk-section uk-section-large">
                <div className="uk-container uk-container-large">
                  <div className="uk-child-width-1-3@s" data-uk-grid>
                  {content.nodes.map((node) => {
                        return (
                          <Link to={"/team" + node.slug }>
                          <div className="uk-card uk-card-default">
                            <div className="uk-card-media-top uk-cover-container">
                              <canvas height="250"></canvas>
                                <img src="https://www.hungryram.com/static/f3d50603ca8c9c75bb6953f759b10713/8b33b/hero-image.webp" alt="" />
                                  <div className="uk-overlay-agent uk-position-cover"></div>
                  
                                </div>
                                <div className="uk-overlay uk-position-bottom uk-light uk-text-center">
                                  <h3 className="uk-h4">{node.title}</h3>
                                </div>
                            </div>
                        </Link>
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
        }
      }
    }
  }
  
`