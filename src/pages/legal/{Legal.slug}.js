import * as React from "react"
import Layout from "../../components/Layout"
import { graphql } from "gatsby";
import Pagebanner from "../../components/Pagebanner";
import showdown from "showdown";
import Seo from "../../components/Seo";

export default function LegalSingle({ data }) {
  const legal = data.legal.frontmatter
  const seo = data.legal.frontmatter.search_engine_optimization
  const converter = new showdown.Converter();
  return (
        <Layout>
          <Seo
            title={seo.title_tag}
            description={seo.meta_description}
          />
          <Pagebanner 
            title={legal.title}
          />
          <div className="uk-section">
            <div className="uk-container uk-container-small">
              <h1>{legal.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(data.legal.rawMarkdownBody) }} />
            </div>
          </div>
        </Layout>
    )
}

export const pageQuery = graphql`
query($id: String){
  legal(id: { eq: $id}) {
    frontmatter {
      search_engine_optimization {
        meta_description
        title_tag
      }
      title
    }
    rawMarkdownBody
  }
}

`