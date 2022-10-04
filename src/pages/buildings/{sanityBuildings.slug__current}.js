import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../../components/Layout"
import ListingBanner from "../../components/templates/ListingBanner"
import { PortableText } from "@portabletext/react"
import Seo from "../../components/Seo"

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
                                        <div dangerouslySetInnerHTML={{ __html: node.graphCode }} />
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