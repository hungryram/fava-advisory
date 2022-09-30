import { graphql, Link, StaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as React from "react"
import * as Styles from "../../styles/listing.module.css"

export default function ListingCard() {
  return (
    <StaticQuery
      query={graphql`
      {
        allSanityListings {
          nodes {
            title
            seo {
              title_tag
              meta_description
            }
            details {
              year_built
              square_footage
              property_type
              mls_number
              price
              bedrooms
              bathrooms
            }
            _rawContent
            Address {
              zip_code
              state
              address
              city
            }
            slug {
              current
            }
            cover {
              asset {
                url
                gatsbyImageData(placeholder: BLURRED)
              }
            }
            hide
          }
        }
      }
      
      
            `}
      render={data => (
        <>
          <div className="uk-section">
            <div className="uk-container uk-container-large">
              <div className="uk-child-width-1-3@l uk-child-width-1-2@m uk-child-width-1-1@s uk-grid-large" data-uk-grid>
                {data.allSanityListings.nodes.map((node) => {
                  return (
                    <>
                      {node.hide
                        ? 
                          <></>
                        :
                        <div>
                        <Link to={"/listings/" + node.slug.current} className="uk-link-reset">
                          <div className="uk-inline-clip uk-transition-toggle image-wrapper uk-margin-small-bottom">
                            {node.cover ?
                              <div className="uk-cover-container" style={{ height: '280px' }}>
                                <GatsbyImage
                                  image={node.cover.asset.gatsbyImageData}
                                  className="uk-transition-scale-up uk-transition-opaque"
                                  data-uk-cover
                                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                                />
                              </div>
                              :
                              <img className="uk-transition-scale-up uk-transition-opaque" src="https://res.cloudinary.com/hungryram19/image/upload/v1645813822/Resources/realestate-assets/no-house-photo.jpg" alt="" data-uk-cover />
                            }
                          </div>
                          <div className="uk-margin-small-top" data-uk-grid>
                            <div className="uk-width-1-2">
                              <h2 className="uk-margin-remove uk-h5 uk-text-bold accent">{node.title}</h2>
                              {node?.details?.price &&
                                <span>{node?.details?.price}</span>
                              }
                            </div>
                            <div className="uk-width-1-2 uk-text-right">
                              {node?.details?.bedrooms &&

                                <span>{node?.details?.bedrooms} Beds / </span>
                              }
                              {node?.details?.bathrooms &&
                                <span>{node.details?.bathrooms} Bath </span>
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