import { graphql, Link } from "gatsby"
import * as React from "react"
import Layout from "../../components/Layout"
import ListingBanner from "../../components/templates/ListingBanner"
import ListingContent from "../../components/templates/ListingContent"
import * as Styles from "../../styles/listing.module.css"

export default function ListingSingle({ data }) {
  const frontMatter = data.listing.frontmatter
  const content = data.listing
  return (
    <Layout>
      <ListingBanner
        image={data.listing.frontmatter.photos.main_photo}
        title={frontMatter.title}
      />

      <ListingContent
        content={content.rawMarkdownBody}
        title={frontMatter.title}
        bed={frontMatter.details.bedrooms}
        bath={frontMatter.details.bathrooms}
        price={frontMatter.price}
        property={frontMatter.properties}
        status={frontMatter.status}
        gallery={frontMatter.photos.gallery.image}
      />

      <div className="uk-section uk-position-relative">
        <div className={Styles.galleryBox}>
          <div className="uk-flex uk-flex-center">
            <h2 className="uk-text-center photo-header">Gallery</h2>
          </div>
        </div>

        <div className="uk-container uk-container-large uk-position-relative">

          <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" data-uk-slider="center: true">

            <ul class="uk-slider-items uk-grid uk-grid-match" data-uk-height-viewport="offset-top: true; offset-bottom: 30" data-uk-lightbox>
              {frontMatter.photos.gallery.map((node) => {
                return (
                  <>
                    <li class="uk-width-3-4">
                      <div class="uk-cover-container">
                        <a href={node.image}>
                          <img src={node.image} alt="" data-uk-cover />
                        </a>
                      </div>
                    </li>
                  </>
                )
              })}
            </ul>
            <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-previous uk-slider-item="previous"></a>
            <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-next uk-slider-item="next"></a>
          </div>
        </div>
      </div>

      <div className="uk-section uk-section-large">
        
      </div>
    </Layout>
  )
}

export const query = graphql`
query($id: String) {
    listing (id: { eq: $id}){
      frontmatter {
        details {
          bathrooms
          bedrooms
        }
        photos {
          gallery {
            image
          }
          main_photo
        }
        price
        properties
        status
        title
      }
      rawMarkdownBody
      slug
    }
  }
  
`