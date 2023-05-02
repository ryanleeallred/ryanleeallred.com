import React from "react"
import Link from "gatsby-link"

import Layout from "../components/layout"

const Tags = ({ pageContext, data, location }) => {
  const { posts, tagName } = pageContext
  const siteTitle = `RyanAllred.ai`

  if (posts) {
    let tag_color = ""
    switch (tagName) {
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
      <Layout location={location} title={siteTitle}>
        <div>
          <h1>
            Posts about{" "}
            <span
              className="tag-list-item"
              style={{
                backgroundColor: tag_color,
                fontWeight: 500,
                padding: "5px 15px",
              }}
            >
              {" "}
              {tagName}
            </span>
          </h1>
          {posts.map(post => {
            return (
              <h2 className="post-title">
                <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
              </h2>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default Tags
