import * as React from "react"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"
import showdown from "showdown"
import Pagebanner from "../../components/Pagebanner"

export default function Teamsingle({ data }) {
  const content = data.team.frontmatter
  const converter = new showdown.Converter();
    return (
        <Layout>
          <Pagebanner
            title={content.title}
          />
            <div className="uk-section uk-section-large">
                <div className="uk-container uk-container-large">
                    <div className="uk-child-width-1-2@s uk-grid-large" data-uk-grid>
                        <div>
                            <img src={content.photo} alt="" />
                        </div>
                        <div>
                            <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(data.team.rawMarkdownBody) }} />
                        </div>
                    </div>
                </div>
            </div>
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
      search_engine_optimization {
        title_tag
      }
    }
  }
}

`