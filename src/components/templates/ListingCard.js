import { graphql, Link, StaticQuery } from "gatsby"
import * as React from "react"
import * as Styles from "../../styles/listing.module.css"

export default function ListingCard() {
  return (
    <StaticQuery
      query={graphql`
            {
                allListing {
                  nodes {
                    frontmatter {
                      title
                      photos {
                        main_photo
                      }
                    }
                    slug
                  }
                }
              }
            `}
      render={data => (
        <>
          <div className="uk-section">
            <div className="uk-container uk-container-large">
              <div className="uk-child-width-1-3@s uk-grid-large" data-uk-grid>
                {data.allListing.nodes.map((node) => {
                  return (
                    <div>
                      <Link to={"/listings" + node.slug} className="uk-link-reset">
                        <div className="uk-inline-clip uk-transition-toggle image-wrapper">
                          <img className="uk-transition-scale-up uk-transition-opaque" src={node.frontmatter.photos.main_photo} alt="" />
                        </div>
                        <h2 className="uk-margin-medium-top uk-h4">{node.frontmatter.title}</h2>
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