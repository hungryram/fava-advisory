import { graphql, Link } from "gatsby"
import * as React from "react"
import Layout from "../../components/Layout"
import ListingBanner from "../../components/templates/ListingBanner"
import { PortableText } from "@portabletext/react"
import Seo from "../../components/Seo"
import { GatsbyImage } from "gatsby-plugin-image"
import * as Styles from "../../styles/contact.module.css"

export default function Building({ data }) {
    const frontMatter = data.sanityBuildings
    const seo = data.sanityBuildings.seo

    return (
        <Layout>
            <ListingBanner
                cover={frontMatter.cover.asset.gatsbyImageData}
                title={frontMatter.title}
            />
            <Seo
                title={seo.title_tag}
                description={seo.meta_description}
            />
            <div className="uk-light" style={{ backgroundColor: '#111820' }}>
                <div className="uk-section-large">
                    <div className="uk-container">

                        <div data-uk-grid>
                            <div className="uk-width-expand@s">
                                {frontMatter.heading &&
                                    <h2>{frontMatter.heading}</h2>
                                }
                            </div>
                            <div className="uk-width-3-5@s">
                                {frontMatter._rawContent &&
                                    <PortableText
                                        value={frontMatter._rawContent}
                                    />
                                }
                                {frontMatter.marketReportFile &&
                                    <div className="uk-white">
                                        <a href={frontMatter.marketReportFile.asset.url} target="_blank" className="uk-button-default uk-button">View Market Report</a>
                                    </div>
                                }
                                <div className="uk-margin-large-top">
                                    <div className="uk-child-width-1-3@s" data-uk-grid>
                                        {frontMatter.number_of_units
                                            ?
                                            <>
                                                <div>
                                                    <span className="uk-heading-small">{frontMatter.number_of_units}</span><br />
                                                    <span>Number of Units</span>
                                                </div>
                                            </>
                                            :
                                            <></>
                                        }
                                        {frontMatter.number_of_floors
                                            ?
                                            <>
                                                <div>
                                                    <span className="uk-heading-small">{frontMatter.number_of_floors}</span><br />
                                                    <span>Floors</span>
                                                </div>
                                            </>
                                            :
                                            <></>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {frontMatter.units &&
                    <div className="uk-section">
                        <div className="uk-container">
                            <div class="uk-overflow-auto">
                                <table class="uk-table uk-table-small uk-table-divider uk-table-justify uk-table-middle uk-text-small">
                                    <thead>
                                        <tr>
                                            <th>Unit</th>
                                            <th>Beds</th>
                                            <th>Baths</th>
                                            <th>Price</th>
                                            <th>Square Footage</th>
                                            <th>Common Charges</th>
                                            <th>Taxes</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {frontMatter?.units?.units.map((node) => {
                                            return (
                                                <tr>
                                                    {node.unit ? <td>{node.unit}</td> : <td>-</td>}
                                                    {node.beds ? <td>{node.beds}</td> : <td>-</td>}
                                                    {node.baths ? <td>{node.baths}</td> : <td>-</td>}
                                                    {node.price ? <td>{node.price}</td> : <td>-</td>}
                                                    {node.square_footage ? <td>{node.square_footage}</td> : <td>-</td>}
                                                    {node.commonCharges ? <td>{node.commonCharges}</td> : <td>-</td>}
                                                    {node.taxes ? <td>{node.taxes}</td> : <td>-</td>}
                                                    {node.status ? <td>{node.status}</td> : <td>-</td>}
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                }
                <div className="uk-section">
                    <div className="uk-container uk-container-xlarge">
                        <div className="uk-child-width-1-2@m uk-flex-center uk-text-center graphEmbed" data-uk-grid data-uk-height-match>
                            {frontMatter.graphs?.graphs.map((node) => {
                                return (
                                    <div>
                                        <div className="uk-hidden" dangerouslySetInnerHTML={{ __html: node.graphCode }} />
                                        <div>
                                            {node.graphImage &&
                                                <GatsbyImage
                                                    image={node.graphImage.asset.gatsbyImageData}
                                                />
                                            }
                                        </div>
                                        <h2>{node.graphName}</h2>
                                        <PortableText
                                            value={node._rawDescription}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="uk-section">
                    <div className="uk-container">
                        <h2>About Fava Advisory</h2>
                        <p>Fava Advisory is a dynamic group of full-time real estate professionals who provide a highly personalized advisory service. We focus on curated real estate advice based on current marketing trends and creative marketing strategies. With over 30 years of combined experience in New York City and abroad, our business has grown through a referral network of repeat clients and we are well-equipped to handle all of your real estate needs. As downtown specialists, we have a true pulse on the market as it relates to your home, and you can feel confident in our ability to help you navigate the selling, buying, or renting process to maximize your goals.</p>
                        <h2>Contact Us</h2>
                        <p>Interested in a free, no-obligation consultation, we would love to set up a casual meet-up for coffee to discuss your plans and how we can be of service. Please complete the form below and we’ll reach out shortly!</p>
                        <div className="uk-card uk-card-default uk-padding uk-margin-large-top">
                            <form name="contact form building" method="POST" netlify-honeypot="bot-field" data-netlify="true" className={`uk-grid-small ${Styles.contactForm}`} data-uk-grid action="/thank-you">
                                <input type="hidden" name="form-name" value="contact form building" />
                                <input name="bot-field" type="hidden" />
                                <input type="hidden" name="Subject" value={`Website Inquiry from ${frontMatter.title}`} />
                                <div className="uk-width-1-2@s">
                                    <label htmlFor="fname">First Name*</label>
                                    <input className="uk-input" type="text" name="First Name" id="fname" required />
                                </div>
                                <div className="uk-width-1-2@s">
                                    <label htmlFor="lname">Last Name*</label>
                                    <input className="uk-input" type="text" name="Last Name" id="lname" required />
                                </div>
                                <div className="uk-width-1-2@s">
                                    <label htmlFor="phone">Phone Number (optional)</label>
                                    <input className="uk-input" type="text" name="Phone" id="phone" />
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
                                    <button className={Styles.submitBtn}>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </Layout>
    )
}

export const query = graphql`
query ($id: String) {
    sanityBuildings(id: {eq: $id}) {
      seo {
        title_tag
        meta_description
      }
      title
      units {
        units {
          unit
          status
          price
          beds
          baths
          commonCharges
          taxes
          Square_footage
        }
      }
      _rawContent
      heading
      cover {
        asset {
          gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
        }
      }
      graphs {
        graphs {
          graphName
          _rawDescription
          graphCode
          graphImage {
            asset {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
      marketReportFile {
        asset {
          url
        }
      }
    }
  }
  
`