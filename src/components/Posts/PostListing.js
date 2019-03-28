import React from 'react'
import Link from 'gatsby-link'
import PostStyle from '../../styles/PostStyle'

const PostListing = ({ post }) =>
  <PostStyle>
    <article>
      {/* <h3>{post.frontmatter.title}</h3>
    <span>{post.frontmatter.date}</span> */}
      {/* <div dangerouslySetInnerHTML={{
        __html: post.html
    }} /> */}

      <h3><Link to={post.fields.slug}>{post.frontmatter.title}</Link>
      </h3>
      <span>{post.frontmatter.date}</span>
      <p>{post.excerpt}</p>

    </article>
  </PostStyle>

export default PostListing
