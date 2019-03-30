import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import { AboutStyle } from '../styles/About'
import AImage from '../components/aimg'
import GlobalStyle from '../styles/Global'
import logo from '../images/big-investiment.svg'
import { HeaderContainer, HeaderWrapper,
  Logo, HeaderNav } from '../styles/headerStyle'

class AboutPage extends Component {
  render () {
    return (
      <AboutStyle>
        <GlobalStyle/>
        <HeaderWrapper>
          <HeaderContainer>
            <h1 style={{ margin: 0 }}>
              <Link
                to="/"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                <Logo src={logo} alt="logo" />
              </Link>
            </h1>
            <HeaderNav>
              <ul>
                <li>
                  <Link
                    to="/"
                    activeClassName="active"
                  >Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/facebook">FacebookPage</Link>
                </li>
              </ul>
            </HeaderNav>
          </HeaderContainer>
          <div className="Banner">
            <AImage/>
          </div>
        </HeaderWrapper>

        <Link to="/page-2/">Go back to Page2</Link>
      </AboutStyle>
    )
  }
}

export default AboutPage

export const query = graphql`
 query AboutQuery {
  site {
          siteMetadata {
              title
              desc
           }
    }
    allMarkdownRemark(sort: {
      fields: [frontmatter___date],
      order: DESC
    }) {
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "MMM DD YYYY")
            }
            fields{
              slug
            }
            html
            excerpt
      }
    }
  }
}
`
