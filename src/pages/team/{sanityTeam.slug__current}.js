import * as React from "react"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"
import Pagebanner from "../../components/Pagebanner"
import TeamDetail from "../../components/templates/TeamDetail"
import showdown from "showdown";
import Seo from "../../components/Seo"

export default function Teamsingle({ data }) {
  const converter = new showdown.Converter();
  const content = data.sanityTeam
  const seo = data.sanityTeam.seo

  return (
    <Layout>
      <Seo
        title={seo.title_tag}
        description={seo.meta_description}
      />
      <Pagebanner
        title={content.title}
      />
      <TeamDetail
        photo={content.image.asset.gatsbyImageData}
        email={content.contact_information.email}
        phone={content.contact_information.phone_number}
        alt_image={content.title}
        content={content._rawContent}
      />
      {content.teamReviews &&
            <div className="uk-section" style={{ paddingTop: '0px' }}>
            <div className="uk-container">
              <div className="uk-flex uk-flex-center">
                <div className="uk-width-large">
                <h2 class="uk-heading-line uk-text-center uk-margin-large"><span>TESTIMONIALS</span></h2>
                </div>
              </div>
              <div className="uk-child-width-1-1@s uk-dark" data-uk-grid>
                {content.teamReviews.review.map((node) => {
                  return (
                    <>
                      <div>
                        <p>{node.testimonial}</p>
                        <small><em>&mdash; {node.name}</em></small>
                        <hr />
                      </div>
                    </>
                  )
                })}
              </div>
            </div>
          </div>
      }
    </Layout>
  )
}

export const pageQuery = graphql`
query ($id: String) {
  sanityTeam(id: {eq: $id}) {
    _rawContent
    contact_information {
      email
      phone_number
    }
    image {
      asset {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    title
    teamReviews {
      review {
        name
        testimonial
      }
    }
    seo {
      meta_description
      title_tag
    }
  }
}


`