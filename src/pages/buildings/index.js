import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../../components/Layout"
import Pagebanner from "../../components/Pagebanner"
import ListingCard from "../../components/templates/ListingCard"

export default function BuildingsIndex({ data }) {
    const frontMatter = data.allBuilding.nodes

    return (
        <>
        <Layout>
        <Pagebanner />
        <div className="uk-section">
                <div className="uk-container uk-container-large">
                    <div className="uk-child-width-1-3@s" data-uk-grid>
                        {frontMatter.map((node) => {
                            return (
                                <ListingCard
                                    title={node.frontmatter.title}
                                    photo={node.frontmatter.photos.main_photo}
                                    link={"/buildings" + node.slug}
                                    
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </Layout>
        </>
    )
}

export const query = graphql`
{
  allBuilding {
    nodes {
      frontmatter {
        title
        unit {
          baths
          beds
          price
          square_footage
          status
          unit
        }
        photos {
          main_photo {
            childImageSharp {
              gatsbyImageData(quality: 80, placeholder: BLURRED, formats: AUTO)
            }
          }
        }
      }
      slug
      rawMarkdownBody
      id
    }
  }
}

`