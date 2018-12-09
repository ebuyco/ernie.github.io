import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Image from '../components/image'
import Img from "gatsby-image"


const IndexPage = ({ data }) => (
  <Layout>
    <h1>{data.site.siteMetadata.title}</h1>
    <Img fluid={data.file.childImageSharp.fluid} />
    <p>{data.site.siteMetadata.desc}</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
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
    file(relativePath: { regex: "/wrapper.jpg/" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
}
`
