import * as React from "react"
import Layout from "../../components/Layout"
import { graphql } from "gatsby";
import Pagebanner from "../../components/Pagebanner";

export default function LegalSingle({ data }) {
    return (
        <Layout>
          <Pagebanner />
          <div className="uk-section">
            <div className="uk-container uk-container-xlarge">
              <h1>{data.legal.childMarkdownRemark.frontmatter.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: data.legal.childMarkdownRemark.html }} />
            </div>
          </div>
        </Layout>
    )
}

export const pageQuery = graphql`
{
  legal {
    childMarkdownRemark {
      frontmatter {
        meta_description
        last_update
        search_engine_optimization {
          title_tag
        }
        title
        title_tag
      }
      html
    }
  }
}

`