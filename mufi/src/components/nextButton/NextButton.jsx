import React from 'react'
import NextBtnStyle from './NextButtonStyle'

export default function NextButton({handleNextBtn}) {
  return (
    <NextBtnStyle onClick={handleNextBtn}>다음</NextBtnStyle>
  )
}
