import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';
import Img from "gatsby-image";
import logo from '../images/big-investiment.svg';
import { HeaderContainer, HeaderWrapper, Logo, HeaderNav} from '../styles/headerStyle';


// const HeaderWrapper = styled.div `
//     background: linear-gradient(-150deg, #5449D2 0%, #60619F 97%);
//     margin-bottom: 1.65rem;
//     overflow: hidden;
//     position: relative;
//     height: 70vh;
//     h1 {
//       img {
//         height: 80px;
//       }
//     }
// `;


// const HeaderContainer = styled.div`
//       margin: 0 auto;
//       max-width: 960px;
//       padding: 1.45rem 1.0875rem;
//       position: relative;
//       z-index: 2; 
// `


// const Logo = styled.img `
//   width: 100%;
//   max-width: 15%;
//   height: 100%;
//   box-sizing: border-box;
//   margin: 0;
  
//   `;



const Header = ({ data }) => (
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
          <Link to="/">Home</Link>
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

export default Header;


