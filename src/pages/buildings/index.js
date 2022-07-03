import * as React from "react"
import PageBanner from "../../components/PageBanner"
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
    allBuilding {
      nodes {
        frontmatter {
          photos {
            main_photo
          }
          title
          unit {
            baths
            beds
            price
            square_footage
            status
            unit
          }
        }
        slug
      }
    }
  }
`