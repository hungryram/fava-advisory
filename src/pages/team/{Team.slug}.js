import * as React from "react"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"
import Pagebanner from "../../components/Pagebanner"
import TeamDetail from "../../components/templates/TeamDetail"

export default function Teamsingle({ data }) {
  const content = data.team.frontmatter
    return (
        <Layout>
          <Pagebanner
            title={content.title}
          />
          <TeamDetail 
            photo={content.photo}
            email={content.contact.email}
            phone={content.contact.phone}
            markdown={data.team.rawMarkdownBody}
            alt_image={content.title}
          />
        </Layout>
    )
}

export const pageQuery = graphql`
query($id: String) {
  team(id: { eq: $id}){
    rawMarkdownBody
    frontmatter {
      photo
      title
      contact {
        phone
        email
      }
      search_engine_optimization {
        title_tag
      }
    }
  }
}

`