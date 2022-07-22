import { graphql, Link, StaticQuery } from "gatsby"
import * as React from "react"
import * as Styles from "../../styles/team.module.css"

export default function TeamCard() {
    return (
        <StaticQuery
            query={graphql`
            {
                allSanityTeam(sort: {fields: order, order: ASC}) {
                  nodes {
                    title
                    slug {
                      current
                    }
                    image {
                      asset {
                        url
                      }
                    }
                  }
                }
              }
              
              
        `}
            render={data => (
                <>
                    <div className="uk-section uk-section-large">
                        <div className="uk-container uk-container-large">
                            <div className="uk-child-width-1-3@s uk-text-center" data-uk-grid>
                                {data.allSanityTeam.nodes.map((node) => {
                                    return (
                                        <div>
                                            <Link to={"/team/" + node.slug.current}>
                                                <div className={`uk-inline-clip  ${Styles.teamCard}`}>
                                                    <div className="uk-cover-container">
                                                        <canvas height="500" width="400"></canvas>
                                                        <div className="uk-transition-toggle image-wrapper">
                                                            <img className={`uk-transition-scale-up uk-transition-opaque ${Styles.image}`} src={node.image.asset.url} alt="" data-uk-cover/>
                                                        </div>

                                                    </div>
                                                    <div className="uk-overlay uk-position-bottom uk-light uk-text-center">
                                                        <h3 className="uk-h4">{node.title}</h3>
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