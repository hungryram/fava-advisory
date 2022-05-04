import { graphql, StaticQuery } from "gatsby"
import * as React from "react"
import showdown from "showdown";

export default function Testimonials() {
    const converter = new showdown.Converter();

    return (
        <StaticQuery
            query={graphql`
            {
                markdownRemark(fileAbsolutePath: {regex: "/testimonials/"}) {
                  frontmatter {
                    search_engine_optimization {
                      meta_description
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
            `}
            
            render={data => (
                
                <>
                    <div className="uk-section" style={{ backgroundColor: '#111820' }}>
                        <div className="uk-container">
                            <div className="uk-child-width-1-1@s uk-light" data-uk-grid>
                            {data.markdownRemark.frontmatter.testimonials.review.map((node) => {
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
                </>
            )}
        />
    )
}