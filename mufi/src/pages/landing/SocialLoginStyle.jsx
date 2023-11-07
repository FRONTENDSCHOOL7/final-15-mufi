import styled, {keyframes} from "styled-components";
import kakao from '../../assets/kakao.png'
import kakaoWhite from '../../assets/message-circle-white.png'
import google from '../../assets/google.png'
import facebook from '../../assets/facebook.png'
import facebookWhite from '../../assets/facebook-white.png'

const moveUpwards = keyframes`
  0% {
    bottom: -350px;
  }
  100% {
    bottom: -80px;
  }
`

export const Dim = styled.div`
  width: 500px;
  height: calc(100vh);
  background-color: #00000097;
  position: absolute;
  top: 0;
  left: 0;
`
export const Container = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  width: 390px;
  height: 362px;
  border-radius: 20px;
  background: #FFF;
  box-shadow: 0 0 8px #00000025;
  margin: 0 auto;
  position: absolute;
  animation: ${moveUpwards} 0.8s forwards;
  border-radius: 16px;
  transition: all 0.8s;
`
export const LoginBtn = styled.button`
  width: 322px;
  line-height: 18px;
  padding: 13px;
  border-radius: 8px;
  background-color: #fff;
  position: relative;
  font-size: 14px;
  color: #767676;
  font-weight: 400;
  &::before {
    content: '';
    width: 24px;
    height: 24px;
    display: inline-block;
    position: absolute;
    left: 14px;
  }
  &:hover {
    color: white;
    font-weight: 700;
  }
`
export const KaKao = styled(LoginBtn)`
  border: 1px solid #F2C94C;
  &::before {
    background: url(${kakao}) no-repeat;
  }

  &:hover {
    background-color: #F2C94C;
  }

  &:hover::before {
    background: url(${kakaoWhite}) no-repeat;
  }
`

export const Google = styled(LoginBtn)`
  border: 1px solid #767676;
  &::before {
    background: url(${google}) no-repeat;
  }
  &:hover {
    background-color: #767676;
  }
`

export const Facebook = styled(LoginBtn)`
  border: 1px solid #2D9CDB;
  &::before {
    background: url(${facebook}) no-repeat;
  }
  &:hover {
    background-color: #2D9CDB;
  }
  &:hover::before {
    background: url(${facebookWhite}) no-repeat;
  }
`

export const TextBtn = styled.button`
  color: #767676;
  font-size: 12px;
  background: none;
  border: none;
  font-weight: 400;
  margin-top: 10px;
`

export const Span = styled.span`
  color: #767676;
  font-size: 12px;
  background: none;
  font-weight: 400;
`