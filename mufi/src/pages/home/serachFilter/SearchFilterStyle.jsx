import styled from "styled-components"

export const SearchFilter = styled.header`
  width: 100%;
  background-color: transparent;
  box-shadow: inset 0 -1px 0 #c4c4c4;
  box-sizing: border-box;
  padding: 0 44px;
`
export const BtnList = styled.ul`
  display: flex;
  align-items: bottom;
  justify-content: space-between;

  .selected {
    color: #000;
    border-bottom: 2px solid #000;
  }
`

export const TextBtn = styled.button`
  width: 64px;
  font-size: 16px;
  background: none;
  border: none;
  font-weight: 700;
  padding: 13px 0 13px 0;
  color: #c4c4c4;
  border-bottom: none;
`