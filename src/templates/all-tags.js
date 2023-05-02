import React from "react"
import Link from "gatsby-link"

import Layout from "../components/layout"

const AllTags = ({ pageContext, data, location }) => {
  // console.log(pageContext)

  const { tags } = pageContext
  const siteTitle = `RyanAllred.ai`

  if (tags) {
    return (
      <Layout location={location} title={siteTitle}>
        <div>
          {tags.map(tag => {
            console.log(tag)
            let tag_color = ""
            switch (tag) {
              case "Outside My Door":
                tag_color = "#308ee2"
                break
              case "Code Challenge":
                tag_color = "#FFA116"
                break
              default:
                tag_color = "#7B58FE"
            }
            return (
              <h2
                className="tag-list-item"
                style={{
                  backgroundColor: tag_color,
                  fontWeight: 500,
                  padding: "8px",
                }}
              >
                <Link
                  style={{ color: "white" }}
                  className="tag-link"
                  to={`/tags/${tag}`}
                >
                  {tag}
                </Link>
              </h2>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default AllTags
