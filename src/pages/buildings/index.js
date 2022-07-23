import * as React from "react"
import PageBanner from "../../components/Pagebanner"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"
import BuildingCard from "../../components/templates/BuildingCard"


export default function BuildingsIndex({ data }) {


    return (
        <>
            <Layout>
                <PageBanner 
                    title="Buildings"
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