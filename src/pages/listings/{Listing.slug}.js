import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../../components/Layout"
import ListingBanner from "../../components/templates/ListingBanner"
import ListingContent from "../../components/templates/ListingContent"

export default function ListingSingle({ data }) {
    const frontMatter = data.listing.frontmatter
    const content = data.listing
    return (
        <Layout>
            <ListingBanner
                image={data.listing.frontmatter.photos.main_photo}
            />

            <ListingContent
                content={content.rawMarkdownBody}
            />
        </Layout>
    )
}

export const query = graphql`
query($id: String) {
    listing (id: { eq: $id}){
      frontmatter {
        details {
          bathrooms
          bedrooms
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
      }
      rawMarkdownBody
      slug
    }
  }
  
`