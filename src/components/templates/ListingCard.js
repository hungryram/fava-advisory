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
              draft
              price
              photos {
                main_photo
              }
              properties
              status
              details {
                bathrooms
                bedrooms
              }
              draft
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
              <div className="uk-child-width-1-3@l uk-child-width-1-2@m uk-child-width-1-1@s uk-grid-large" data-uk-grid>
                {data.allListing.nodes.map((node) => {
                  return (
                    <>
                      {node.frontmatter.draft ?
                      <></>
                      :
                      <div>
                      <Link to={"/listings" + node.slug} className="uk-link-reset">
                        <div className="uk-inline-clip uk-transition-toggle image-wrapper uk-cover-container uk-margin-small-bottom">
                          <canvas height="350" width="500"></canvas>
                          {node.frontmatter.photos.main_photo ?
                            <img className="uk-transition-scale-up uk-transition-opaque" src={node.frontmatter.photos.main_photo} alt="" data-uk-cover />
                            :
                            <img className="uk-transition-scale-up uk-transition-opaque" src="https://res.cloudinary.com/hungryram19/image/upload/v1645813822/Resources/realestate-assets/no-house-photo.jpg" alt="" data-uk-cover />
                          }
                        </div>
                        <div className="uk-margin-small-top" data-uk-grid>
                          <div className="uk-width-1-2">
                            <h2 className="uk-margin-remove uk-h5 uk-text-bold accent">{node.frontmatter.title}</h2>
                            <span>{node.frontmatter.price}</span>
                          </div>
                          <div className="uk-width-1-2 uk-text-right">
                            {node.frontmatter.details.bedrooms &&

                              <span>{node.frontmatter.details.bedrooms} Beds / </span>
                            }
                            {node.frontmatter.details.bathrooms &&
                              <span>{node.frontmatter.details.bathrooms} Bath </span>
                            }
                          </div>
                        </div>
                      </Link>
                    </div>
                        
                      }
                    </>
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