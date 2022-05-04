import * as React from "react"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"
import Pagebanner from "../../components/Pagebanner"
import TeamDetail from "../../components/templates/TeamDetail"
import showdown from "showdown";

export default function Teamsingle({ data }) {
  const converter = new showdown.Converter();

  const content = data.team.frontmatter
  return (
    <Layout>
      <Pagebanner
        title={content.title}
      />
      <TeamDetail
        photo={content.photo}
        email={content.contact.email}
        phone={content.contact.phone}
        markdown={data.team.rawMarkdownBody}
        alt_image={content.title}
      />
      {content.testimonials &&
            <div className="uk-section" style={{ paddingTop: '0px' }}>
            <div className="uk-container">
              <div className="uk-flex uk-flex-center">
                <div className="uk-width-large">
                <h2 class="uk-heading-line uk-text-center uk-margin-large"><span>TESTIMONIALS</span></h2>
                </div>
              </div>
              <div className="uk-child-width-1-1@s uk-dark" data-uk-grid>
                {content.testimonials.review.map((node) => {
                  return (
                    <>
                      <div>
                        <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(node.testimonial) }} />
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
  team(id: {eq: $id}) {
    rawMarkdownBody
    frontmatter {
      photo
      title
      contact {
        phone
        email
      }
      search_engine_optimization {
        title_tag
      }
      testimonials {
        review {
          name
          testimonial
        }
      }
    }
  }
}

`