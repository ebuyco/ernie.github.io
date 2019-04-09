import styled from 'styled-components'

const HeaderContainer = styled.div`
      margin: 0 auto;
      max-width: 960px;
      padding: 1.45rem 1.0875rem;
      position: relative;
      z-index: 2;
      font-family: 'Montserrat', sans-serif;   
      display: flex;
      justify-content: space-between;
`

const HeaderWrapper = styled.div`
    background: linear-gradient(-150deg, #5449D2 0%, #60619F 97%);
    margin-bottom: 1.65rem;
    overflow: hidden;
    position: relative;
    /* height: ${ ({ isHome }) => (isHome ? '70vh' : '20vh') }; */
    height: 30vh;
    font-family: 'Montserrat', sans-serif;
   
    h1 {
      img {
        height: 100%;
      }
    }
`

const WrapperImg = styled.img`
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        margin-bottom: 1.2rem;
        font-family: 'Montserrat', sans-serif; 
`

const Logo = styled.img`
  font-family: 'Montserrat', sans-serif;
  width: 100%;
  max-width: 80%;
  height: 100%;
  box-sizing: border-box;
  margin: 0;
  
  `

const HeaderNav = styled.nav`
    color: #F2F2F2;
    font-family: 'Montserrat', sans-serif;
    & nav.fixed-nav{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 12vh;
        z-index: 20;
        background-color: #002749;
        color: #fff;
        text-align: center;
        transition: all 0.3s cubic-bezier(0.6, -0.28, 0.735, 0.045);
        opacity: 1;
        transform: scale(1);
        display:flex;
        justify-content:center;
        img {
          max-width: 25%;
          position: relative;
          top: 0;
          right:0;
        }
        ul{
          @media only screen and (max-width: 720px) {
            display: grid;
            grid-auto-flow: row;
            grid-template-rows: 4fr 4fr;
          } 
        }
       
    }
    ul {
        list-style:none;
        display: flex;   
        li {
        color: white;
        padding: 2rem;
               a {
                text-decoration: none;
                color:  #F2F2F2;
                  &:hover{
                        color:#21c657;
                        border-bottom: 3px solid #524763;
                    }
                    &:active {
                      border-bottom: 3px solid #524763;
                      color: aliceblue;
                    }   
                    &:focus {
                      border-bottom: 3px solid #524763;
                      color: aliceblue;
                    }
                   
            }
    }
       
    }
    
`

export { HeaderContainer, HeaderWrapper,
  Logo, HeaderNav, WrapperImg }
