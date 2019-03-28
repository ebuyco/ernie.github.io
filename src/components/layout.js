import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'
import './layout.css'
import GlobalStyle from '../styles/Global'

const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            desc
          }
        }
        file(relativePath: { regex: "/office.jpeg/" }) {
          childImageSharp {
            fluid(maxWidth: 1240 ) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <>
       <GlobalStyle>
         <Helmet
           title={data.site.siteMetadata.title}
           meta={[
             { name: 'description', content: 'Sample' },
             { name: 'keywords', content: 'sample, something' },
           ]}
         >

           <html lang="en" />

         </Helmet>
       </GlobalStyle>
        <Header siteTitle={data.site.siteMetadata.title}
          data={ data }
          location={location}/>
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

export const query = graphql`
 query LayoutQuery {
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
