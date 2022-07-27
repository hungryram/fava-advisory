import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../../components/Layout"
import ListingBanner from "../../components/templates/ListingBanner"
import { PortableText } from "@portabletext/react"
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto"


export default function Building({ data }) {
    const frontMatter = data.sanityBuildings

    return (
        <Layout>
            <ListingBanner
                cover={frontMatter.cover.asset.gatsbyImageData}
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
                                <PortableText
                                    value={frontMatter._rawContent}
                                />
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
                                        <th>Price</th>
                                        <th>Square Footage</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {frontMatter.units.units.map((node) => {
                                        return (
                                            <tr>
                                                {node.unit ? <td>{node.unit}</td> : <td>-</td>}
                                                {node.beds ? <td>{node.beds}</td> : <td>-</td>}
                                                {node.baths ? <td>{node.baths}</td> : <td>-</td>}
                                                {node.price ? <td>{node.price}</td> : <td>-</td>}
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
                    <div className="uk-container uk-container-xlarge">
                        <div className="uk-child-width-1-2@s" data-uk-grid>
                            <div className="uk-white">
                                
                            <iframe width="600" height="371" seamless frameborder="0" scrolling="no" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQgJC09CgmnZ61IJdqswDlN17TcjGXpWcXbiC6nNlEz9WCGngfwuU3zORzB13GIOdavSqNXLjyVO3P1/pubchart?oid=1116779755&amp;format=interactive"></iframe>
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
          axes {
            xAxis
            yAxis
          }
        }
      }
    }
  }
  
`