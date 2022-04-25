import * as React from "react"
import { graphql, Link } from "gatsby"

export default function Teamcard({ data }) {
  const content = data.team.frontmatter
  return (
    <>
      <Link to="">
        <div className="uk-card uk-card-default">
          <div className="uk-card-media-top uk-cover-container">
            <canvas height="450"></canvas>
              <img src="https://www.hungryram.com/static/f3d50603ca8c9c75bb6953f759b10713/8b33b/hero-image.webp" alt="" />
                <div className="uk-overlay-agent uk-position-cover"></div>

              </div>
              <div className="uk-overlay uk-position-bottom uk-light uk-text-center">
                <h3 className="uk-h4">{content.title}</h3>
              </div>
          </div>
      </Link>
    </>
  )
}

export const query = graphql`
{
  team {
    frontmatter {
      search_engine_optimization {
        title_tag
      }
      title
    }
    slug
  }
}

`