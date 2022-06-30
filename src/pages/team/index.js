import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../../components/Layout"
import Pagebanner from "../../components/Pagebanner"
import Seo from "../../components/Seo"
import TeamCard from "../../components/templates/TeamCard"

export default function TeamIndex({ data }) {
  return (
    <Layout>
      <Seo
        title="The Fava Advisory Team | Fava Advisory"
        description="We're a dynamic group of full-time real estate professionals who provide a highly personalized advisory service. We focus on curated real estate advice based on current marketing trends and creative marketing strategies."
      />
      <Pagebanner
        title="Advisory Team"
        description="We're a dynamic group of full-time real estate professionals who provide a highly personalized advisory service. We focus on curated real estate advice based on current marketing trends and creative marketing strategies."
      />

      <div className="uk-section uk-section-large">
        <div className="uk-container uk-container-large">
          <div className="uk-child-width-1-3@s uk-text-center uk-grid-large" data-uk-grid>
            {data.allTeam.nodes.map((node) => {
              return (
                <TeamCard 
                  link={"/team" + node.slug}
                  photo={node.childMarkdownRemark.frontmatter.photo}
                  title={node.childMarkdownRemark.frontmatter.title}
                  _key={node.id}
                />
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
  allTeam(sort: {fields: frontmatter___order, order: ASC}) {
    nodes {
      slug
      childMarkdownRemark {
        frontmatter {
          search_engine_optimization {
            meta_description
            title_tag
          }
          photo {
            childImageSharp {
              gatsbyImageData(quality: 80, placeholder: BLURRED, formats: AUTO)
            }
          }
          title
          order
        }
      }
      id
    }
  }
}

`