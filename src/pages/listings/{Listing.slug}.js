import { graphql, Link } from "gatsby"
import * as React from "react"
import Layout from "../../components/Layout"
import ListingBanner from "../../components/templates/ListingBanner"
import ListingContent from "../../components/templates/ListingContent"
import * as Styles from "../../styles/listing.module.css"
import * as ContactStyle from "../../styles/contact.module.css"
import Seo from "../../components/Seo"


export default function ListingSingle({ data }) {
  const frontMatter = data.listing.frontmatter
  const seo = data.listing.frontmatter.search_engine_optimization
  const content = data.listing
  return (
    <Layout>
      <Seo
          title={seo.title_tag}
          description={seo.meta_description}
       />
      <ListingBanner
        image={data.listing.frontmatter.photos.main_photo}
        title={frontMatter.title}
      />

      <ListingContent
        content={content.rawMarkdownBody}
        title={frontMatter.title}
        address={frontMatter.title}
        city={frontMatter.cities}
        state={frontMatter.states}
        zip_code={frontMatter.zip_codes}
        hoa={frontMatter.details.hoa}
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
            <div>
            <h2 className="uk-text-center photo-header">Gallery</h2>
            </div>
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

      <div className="uk-section uk-section-large uk-margin-large-top" style={{ backgroundColor: 'rgb(247 247 247)' }}>
          <div className="uk-container uk-container-small">
            <h2 className="uk-margin-large-bottom uk-text-center">Request More Information</h2>
          <div className="uk-card uk-card-default uk-padding">
          <form name="Website Listing Inquiry" method="POST" netlify-honeypot="bot-field" data-netlify="true" className={`uk-grid-small ${ContactStyle.contactForm}`} data-uk-grid action="/thank-you">
            <input type="hidden" name="form-name" value="Website Listing Inquiry" />
            <input name="bot-field" type="hidden" />
            <input type="hidden" name="Subject" value={`Website Listing Inquiry ${frontMatter.title}`} />
            <div className="uk-width-1-2@s">
              <label htmlFor="fname">First Name*</label>
              <input className="uk-input" type="text" name="First Name" id="fname" required />
            </div>
            <div className="uk-width-1-2@s">
              <label htmlFor="lname">Last Name*</label>
              <input className="uk-input" type="text" name="Last Name" id="lname" required />
            </div>
            <div className="uk-width-1-2@s">
              <label htmlFor="phone">Phone Number*</label>
              <input className="uk-input" type="text" name="Phone" id="phone" required />
            </div>
            <div className="uk-width-1-2@s">
              <label htmlFor="email">Email Address*</label>
              <input className="uk-input" type="text" name="Email" id="email" required />
            </div>
            <div className="uk-width-1-1">
              <label htmlFor="email">Your Message*</label>
              <textarea className="uk-textarea" rows="5" name="Message" id="message"></textarea>
            </div>
            <div className="uk-width-1-1">
              <p className="uk-text-small">By submitting the form with your information above you are agreeing to our <Link to="/legal/terms-and-conditions">Terms and Conditions</Link> and <Link to="/legal/privacy-policy">Privacy Policy</Link></p>
            </div>
            <div className="uk-width-1-1">
              <button className={ContactStyle.submitBtn}>Submit</button>
            </div>
          </form>
        </div>
          </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
query($id: String) {
    listing (id: { eq: $id}){
      frontmatter {
        search_engine_optimization {
          title_tag
          meta_description
        }
        details {
          bathrooms
          bedrooms
          hoa
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
        cities
        states
        zip_codes
      }
      rawMarkdownBody
      slug
    }
  }
  
`