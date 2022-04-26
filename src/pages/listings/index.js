import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../../components/Layout"

export default function ListingList({ data }) {
    return (
        <Layout>

        </Layout>
    )
}

export const query = graphql`
{
    listing {
      frontmatter {
        title
      }
      slug
    }
  }
`