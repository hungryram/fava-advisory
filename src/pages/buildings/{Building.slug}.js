import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../../components/Layout"
import ListingBanner from "../../components/templates/ListingBanner"
import showdown from "showdown"

export default function Building({ data }) {
    const frontMatter = data.building.frontmatter
    const converter = new showdown.Converter();
    return (
        <Layout>
            <ListingBanner
                image={frontMatter.photos.main_photo}
                title={frontMatter.title}
            />
            <div className="uk-light" style={{ backgroundColor: '#111820' }}>
                <div className="uk-section-large">
                    <div className="uk-container">
                        <div data-uk-grid>
                            <div className="uk-width-expand@s">
                                <h2>{frontMatter.heading}</h2>
                            </div>
                            <div className="uk-width-3-5@s">
                                <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(data.building.rawMarkdownBody) }} />
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
                <div className="uk-section">
                    <div className="uk-container">
                        <div class="uk-overflow-auto">
                            <table class="uk-table uk-table-small uk-table-divider uk-table-justify uk-table-middle uk-text-small">
                                <thead>
                                    <tr>
                                        <th>Unit</th>
                                        <th>Beds</th>
                                        <th>Baths</th>
                                        <th>Square Footage</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {frontMatter.unit.map((node) => {
                                        return (
                                            <tr>
                                                {node.unit ? <td>{node.unit}</td> : <td>-</td>}
                                                {node.beds ? <td>{node.beds}</td> : <td>-</td>}
                                                {node.baths ? <td>{node.baths}</td> : <td>-</td>}
                                                {node.square_footage ? <td>{node.square_footage}</td> : <td>-</td>}
                                                {node.status ? <td>{node.status}</td> : <td>-</td>}


                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="uk-section">
                    <div>
                        <div class="uk-inline uk-light uk-cover-container">
                            <img src={frontMatter.banner.image} alt="" data-uk-cover />
                            <canvas height="600" width="2000"></canvas>
                            <div class="uk-overlay-primary uk-position-cover"></div>
                            <div class="uk-position-center">
                                <h2>{frontMatter.banner.heading}</h2>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Layout>
    )
}

export const query = graphql`

query ($id: String) {
    building(id: {eq: $id}) {
      rawMarkdownBody
      frontmatter {
        title
        heading
        banner {
            image
            heading
        }
        unit {
          beds
          baths
          price
          square_footage
          status
          unit
        }
        photos {
          main_photo
        }
        number_of_floors
        number_of_units
        banner {
          heading
          image
        }
      }
    }
  }
  
`