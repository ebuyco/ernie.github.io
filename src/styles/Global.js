import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Montserrat', sans-serif;
  src: url('../assets/fonts/Montserrat-Regular.ttf, Montserrat-Bold.ttf, Montserrat-ExtraBold.ttf,Montserrat-SemiBold.ttf, Montserrat-Light.ttf, Montserrat-Medium.ttf, Montserrat-Black.ttf') format("truetype");
  font-weight: normal;
  font-style: normal;
}
html {
  box-sizing: border-box;
  font-size: 10px;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  background-color: #F7F8FC;
  padding: 0;
  margin: 0;
  font-size: 1.2rem;
  line-height: 2;
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}

button {  font-family:'Montserrat', sans-serif; }
`;


export default GlobalStyle;
