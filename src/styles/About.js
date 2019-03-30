import styled from 'styled-components'

const AboutStyle = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    text-align: center;
    position: relative;
    top: 0;
    right: 0;
    height: 40vh;
    a {
        font-family: 'Montserrat', sans-serif;
        font-size: 1.2rem;
    }
   
    .Banner {
    position: absolute;
    overflow: hidden;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    margin-bottom: 1.2rem;
      img {
         position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          margin-bottom: 1.2rem;
      }  
    }
    
`
const Banner = styled.img`
    width: 100%;
    
`
export { AboutStyle, Banner }
