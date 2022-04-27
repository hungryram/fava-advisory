import { graphql, Link, StaticQuery } from "gatsby"
import * as React from "react"


export default function BlogList() {
    return (
        <StaticQuery
            query={graphql`
            {
                allBlog {
                  nodes {
                    frontmatter {
                      title
                      featured_image
                      image_alt_tag
                    }
                    slug
                  }
                }
              }
            `}
            render={data => (
                <>
                    <div className="uk-section uk-section-large">
                        <div className="uk-container uk-container-large">
                            <div className="uk-child-width-1-3@s" data-uk-grid>
                                {data.allBlog.nodes.map((node) => {
                                    return (
                                        <div>
                                            <Link to={"/blog" + node.slug} className="uk-link-reset">
                                                <div className="uk-card">
                                                    <div className="uk-card-media-top uk-cover-container">
                                                        <canvas height="500"></canvas>
                                                        <img src={node.frontmatter.featured_image} alt={node.frontmatter.image_alt_tag} data-uk-cover />
                                                        <div className="uk-overlay-agent uk-position-cover"></div>

                                                    </div>
                                                    <div className="uk-padding">
                                                        <h2 className="uk-h4">{node.frontmatter.title}</h2>
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