import * as React from "react"
import PageBanner from "../../components/Pagebanner"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"
import BuildingCard from "../../components/templates/BuildingCard"
import Seo from "../../components/Seo"


export default function BuildingsIndex({ data }) {


    return (
        <>
            <Layout>
                <PageBanner 
                    title="Buildings"
                />
                <Seo
                  title="Buildings | Fava Advisory"
                  description="View luxury condo buildings in New York from Fava Advisory"
                />
                <BuildingCard />
                
            </Layout>
        </>
    )
}

export const query = graphql`
{
  allSanityBuildings {
    nodes {
      cover {
        asset {
          gatsbyImageData
        }
      }
      title
      slug {
        current
      }
    }
  }
}

`