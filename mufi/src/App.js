import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset'
import Router from "./router/Router";

const GlobalStyle = createGlobalStyle`
${reset}

body {
  font-family: 'Pretendard'
}

@font-face {
  font-family: 'Pretendard';
  src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
      format('woff');
  font-weight: 400;
  font-style: normal;
} 

button {
  font: inherit;
  font-weight: bold;
}
`

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  )
  ;
}

export default App;
