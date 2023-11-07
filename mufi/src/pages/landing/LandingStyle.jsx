import styled, {keyframes} from "styled-components";
import NextBtnStyle from "../../components/nextButton/NextButtonStyle";

export const Layout = styled.div`
  position: relative;
  text-align: center;
  width: 100vw; 
  max-width: 390px; 
  height: 100vh;
  background-color: #000;
  margin: auto;
  overflow: hidden;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Logo = styled.img`
  width: 73.33vw;
  max-width: 286px;
  height: auto;
  margin-top: 30vh;
  margin-bottom: 15vh; 

`
const moveUpwards = keyframes`
0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-5vh); // Y축으로 뷰포트 높이의 5%만큼 이동
  }
`
export const LogoUp = styled(Logo)`
  animation: ${moveUpwards} 0.8s forwards;
`
export const divText = styled.div`
margin-top: 5vh;
  margin-bottom: 5vh
`
export const desc = styled.p`
  color: #767676;
  font-size: 12px;
  background: none;
  display: inline-block;
`
export const textBtn = styled.button`
  color: #fff;
  font-size: 12px;
  background: none;
  border: none;
  font-weight: 400;
`
export const nextBtn = styled(NextBtnStyle)`
  margin-top: 16px;
`