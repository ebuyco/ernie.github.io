import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Image from '../components/image';
import PostListing from '../components/Posts/PostListing';


const IndexPage = ({ data }) => (
  <Layout>
    <h1>{data.site.siteMetadata.title}</h1>
    <p>{data.site.siteMetadata.desc}</p>
    {data.allMarkdownRemark.edges.map(({node}) => (
    <PostListing key={node.id} post={node} />
    ))}
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image/>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)


export default IndexPage

export const query = graphql`
 query SiteMeta {
  	site {
          siteMetadata {
              title
              desc
           }
    }
    allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "MMM DD YYYY")
        }
        html
        excerpt
      }
    }
  }
}
`
