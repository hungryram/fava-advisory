import { GatsbyImage } from "gatsby-plugin-image"
import * as React from "react"
import * as Styles from "../../styles/listing.module.css"

export default function ListingBanner({ image, title }) {
    return (
        <>
            <div class="uk-cover-container" data-uk-height-viewport>
                <div>
                    <GatsbyImage
                        image={image.childImageSharp.gatsbyImageData}
                        alt={title}
                        style={{ objectFit: 'cover', height: '100vh', width: '100%', objectPosition: 'center' }}
                    />
                    <div class="uk-overlay-primary uk-position-cover"></div>
                    <div className="uk-position-center uk-light uk-text-center">
                        <div className="uk-width-2xlarge uk-padding-small">
                            <h1 className={`uk-text-uppercase uk-heading-small font-weight-medium ${Styles.listingBannerTitle}`}>{title}</h1>
                        </div>
                    </div>
                    <div class={Styles.scrollDown}><a href="#form"></a></div>
                </div>
            </div>
        </>
    )
}