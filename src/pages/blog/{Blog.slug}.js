import * as React from "react"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"
import showdown from "showdown"
import Pagebanner from "../../components/Pagebanner"
import Seo from "../../components/Seo"

export default function BlogSingle({ data }) {
  const content = data.blog.frontmatter
  const seo = data.blog.frontmatter.search_engine_optimization
  const converter = new showdown.Converter();
  return (
    <Layout>
      <Seo
        title={seo.title_tag}
        description={seo.meta_description}
      />
      <Pagebanner
        title={content.title}
      />
      <div className="uk-section uk-section-large">
        <div className="uk-container uk-container-small">
          <div>
            <div>
              <img src={content.featured_image} alt="" />
              <div className="uk-margin-large-top">
                <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(data.blog.rawMarkdownBody) }} />
              </div>

            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
query($id: String) {
  blog(id: { eq: $id}){
    rawMarkdownBody
    frontmatter {
      featured_image
      title
      search_engine_optimization {
        title_tag
        meta_description
      }
    }
  }
}

`