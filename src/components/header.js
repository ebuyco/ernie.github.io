import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';

import logo from '../images/brand-icon.svg';

const HeaderWrapper = styled .div `
    background: linear-gradient(-150deg, #5449D2 0%, #60619F 97%);
    marginBottom: 1.45rem;
    h1 {
      img {
        height: 80px;
      }
    }
`;

const Logo = styled.img `
  width: 100%;
  max-width: 15%;
  height: 100%;
  box-sizing: border-box;
  margin: 0;
  
  `;

const Header = ({ data }) => (
  <HeaderWrapper>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
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
      <p>{data.site.siteMetadata.title}</p>
      <p>{data.site.siteMetadata.desc}</p>
    </div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  </HeaderWrapper>
)

export default Header

