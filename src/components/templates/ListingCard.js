import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as React from "react"

export default function ListingCard({ link, photo, title, price, bedrooms, bathrooms }) {
  return (
    <>
      <div>
        <Link to={link} className="uk-link-reset">
          <div className="uk-inline-clip uk-transition-toggle image-wrapper uk-cover-container uk-margin-small-bottom">
            <GatsbyImage
              image={photo.childImageSharp.gatsbyImageData}
              alt={title}
              className="uk-transition-scale-up uk-transition-opaque"
              style={{ objectFit: 'cover', height: '100%', width: '100%' }}
              data-uk-cover
            />
          </div>
          <div className="uk-margin-small-top" data-uk-grid>
            <div className="uk-width-1-2">
              <h2 className="uk-margin-remove uk-h5 uk-text-bold accent">{title}</h2>
              <span>{price}</span>
            </div>
            <div className="uk-width-1-2 uk-text-right">
              {bedrooms &&

                <span>{bedrooms} Beds / </span>
              }
              {bathrooms &&
                <span>{bathrooms} Bath </span>
              }
            </div>
          </div>
        </Link>
      </div></>
  )
}