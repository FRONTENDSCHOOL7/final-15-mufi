import styled from "styled-components";
import NextBtnStyle from "../../components/nextButton/NextButtonStyle";

export const Layout = styled.div`
  text-align: center;
  width: 390px;
  height: 844px;
  background-color: #000;
  margin: auto;
`

export const Logo = styled.img`
  width: 286px;
  height: 71px;
  margin: 280px 0 265px;
`
export const divText = styled.div`
  margin-top: 45px;
  margin-bottom: 49px;
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