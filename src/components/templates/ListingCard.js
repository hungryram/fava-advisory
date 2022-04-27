import { graphql, Link, StaticQuery } from "gatsby"
import * as React from "react"

export default function ListingCard() {
    return (
        <StaticQuery
            query={graphql`
            {
                allListing {
                  nodes {
                    frontmatter {
                      title
                    }
                    slug
                  }
                }
              }
            `}
            render = {data=> (
                <>
                {data.allListing.nodes.map((node) => {
                    return (
                        <Link to={"listings" + node.slug}>{node.frontmatter.title}</Link>
                    )
                })}
                </>
            )}
        />
    )
}