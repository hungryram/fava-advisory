import { graphql, Link, StaticQuery } from "gatsby"
import * as React from "react"

export default function TeamCard() {
    return (
        <StaticQuery
            query={graphql`
        {
            allTeam(sort: {fields: frontmatter___order, order: ASC}) {
              nodes {
                slug
                frontmatter {
                  search_engine_optimization {
                    title_tag
                  }
                  title
                  photo
                  order
                }
              }
            }
          }
        `}
            render={data => (
                <>
                    <div className="uk-section uk-section-large">
                        <div className="uk-container uk-container-large">
                            <div className="uk-child-width-1-3@s" data-uk-grid>
                                {data.allTeam.nodes.map((node) => {
                                    return (
                                        <div>
                                            <Link to={"/team" + node.slug}>
                                                <div className="uk-card uk-card-default">
                                                    <div className="uk-card-media-top uk-cover-container">
                                                        <canvas height="500"></canvas>
                                                        <img src={node.frontmatter.photo} alt="" data-uk-cover />
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
                </>
            )}
        />
    )
}