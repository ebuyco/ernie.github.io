
import React, { Component } from 'react'
import { Link } from 'gatsby'
// import styled from 'styled-components'
import Img from 'gatsby-image'
import logo from '../images/big-investiment.svg'
import { HeaderContainer, HeaderWrapper,
  Logo, HeaderNav } from '../styles/headerStyle'

export default class Header extends Component {
  render () {
    const { data } = this.props
    return (
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

          <div
            style={{
              margin: '0 auto',
              maxWidth: 960,
              padding: '1.45rem 1.0875rem',
            }}
          >

            {/* <p>{data.site.siteMetadata.title}</p>
      <p>{data.site.siteMetadata.desc}</p> */}
          </div>
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
        <Img style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          marginBottom: '1.2rem'
        }}
        fluid={data.file.childImageSharp.fluid} />
      </HeaderWrapper>
    )
  }
}
