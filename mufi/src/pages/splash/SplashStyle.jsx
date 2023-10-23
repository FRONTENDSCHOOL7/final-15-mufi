import styled, {keyframes} from "styled-components";
import splashBg from "../../assets/splash-bg.png"

const moveBg = keyframes`
  to {
      background-position: 0 -585px;
    }
`

export const Layout = styled.div`
  position: relative;
  text-align: center;
  width: 390px;
  height: 844px;
  background-color: #000;
  margin: auto;
  border-radius: 16px;
  overflow: hidden;
  &::after{ 
    content: '';
    width: 390px;
    height: 844px;
    position: absolute;
    top: 0;
    left: 0; 
    background: linear-gradient(#000, #00000000, #000);
  }
  &::before{
    content: '';
    width: 200%;
    height: 200%;
    position: absolute;
    background:url(${splashBg}) no-repeat 0 0;
    top: 0;
    left: -200px;
    animation: ${moveBg} 2s linear forwards infinite;
    transform: rotate(30deg);
  }
`

export const Logo = styled.img`
  width: 286px;
  height: 71px;
  margin: 0 auto;
  margin-top: 385px;
`