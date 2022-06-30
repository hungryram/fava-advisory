import * as React from "react"
import Layout from "../../components/Layout"
import Pagebanner from "../../components/Pagebanner"
import ListingCard from "../../components/templates/ListingCard"
import { graphql } from "gatsby"
import Seo from "../../components/Seo"

export default function ListingList({ data }) {
  return (
    <Layout>
      <Seo
        title="Exclusive Listings by Fava Advisory | Fava Advisory"
        description="The Fava Advisory represents a selection of beautiful homes in and around New York City. If you're looking to buy or list your home you'll want to work with the Fava Advisory."
      />
      <Pagebanner
        title="Exclusive Listings"
        description="The Fava Advisory represents a selection of beautiful homes in and around New York City. If you're looking to buy or list your home you'll want to work with the Fava Advisory. Contact us today for a personalized home valuation or to discuss your buying goals. "
      />
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <div className="uk-child-width-1-3@s" data-uk-grid>
            {data.allListing.nodes.map((node) => {
              return (
                <>
                  {node.childMarkdownRemark.frontmatter.draft ?
                    <></>
                    :
                    <ListingCard
                        title={node.childMarkdownRemark.frontmatter.title}
                        photo={node.childMarkdownRemark.frontmatter.photos.main_photo}
                        bedrooms={node.childMarkdownRemark.frontmatter.details.bedrooms}
                        bathrooms={node.childMarkdownRemark.frontmatter.details.bathrooms}
                        price={node.childMarkdownRemark.frontmatter.price}
                        link={"/listings" + node.slug}
                        _key={node.id}
                    />

                  }
                </>
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
{
  allListing(
    filter: {frontmatter: {}}
    sort: {fields: frontmatter___title, order: DESC}
  ) {
    nodes {
      slug
      childMarkdownRemark {
        frontmatter {
          photos {
            main_photo {
              childImageSharp {
                gatsbyImageData(quality: 30, width: 500, formats: AUTO)
              }
            }
          }
          draft
          price
          title
          properties
          status
          details {
            bathrooms
            bedrooms
          }
        }
      }
      id
    }
  }
}

`