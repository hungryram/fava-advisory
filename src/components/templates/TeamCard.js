import { graphql, Link, StaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as React from "react"
import * as Styles from "../../styles/team.module.css"

export default function TeamCard({ photo, link, title }) {
    return (
        <div>
            <Link to={link}>
                <div className={`uk-inline-clip  ${Styles.teamCard}`}>
                    <div className="uk-cover-container">
                        <div className="uk-transition-toggle image-wrapper" style={{ height: '500px' }}>
                            <GatsbyImage
                                image={photo.childImageSharp.gatsbyImageData}
                                alt={title}
                                className={`uk-transition-scale-up uk-transition-opaque ${Styles.image}`}
                                style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                                data-uk-cover
                            />
                        </div>

                    </div>
                    <div className="uk-overlay uk-position-bottom uk-light uk-text-center">
                        <h3 className="uk-h4">{title}</h3>
                    </div>
                </div>
            </Link>
        </div>
    )
}