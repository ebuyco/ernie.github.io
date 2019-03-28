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
    height: 40vh;
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
    color: #524763;
    font-family: 'Montserrat', sans-serif;
    ul {
        list-style:none;
        display: flex;    
        li {
        color: white;
        padding: 2rem;
            a {
                text-decoration: none;
                color: #524763;
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
