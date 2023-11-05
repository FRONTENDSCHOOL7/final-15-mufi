import styled from 'styled-components';

export const HashtagWrapper = styled.div`
  position: relative;
  width: 390px;
  height: 100vh;
  background-color: #fff;
  margin: auto;
  border-radius: 16px;
`;

export const SearchBox = styled.div`
  position: relative;
  width: auto;
  // padding-top: 8px;
  padding-left: 37px;
  padding-right: 37px;
`;

export const SearchInput = styled.input`
  width: 316px;
  height: 32px;
  margin-top: 8px; 
  box-sizing: border-box;
  border-radius: 32px;
  border: none;
  outline: none;

  background-color: #f2f2f2;
  padding: 0;
  padding-left: 16px;
  color: #000000;
 &::placeholder {
    color: #C4C4C4; // placeholder의 색상 설정
    }
    
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;

export const SearchButton = styled.button`
  position: absolute;
  border: none;
  background: none;
  padding: 0;
  top: 13px;
  right: 49px;
`;

export const SearchResult = styled.div`
  border: none;
  background-color: transparent;
  padding: 5px 8px;
  width: 100%;
  box-sizing: border-box;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #efefef;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const Title = styled.div`
  font-size: 14px;
`;

export const Artist = styled.div`
  font-size: 12px;
  color: #767676;
`;

export const SearchList = styled.div`
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  max-height: 300px; 
`;


export const SelectButton = styled.button`
  width: 56px;
  height: 28px;
  background-color: #2033e7;
  color: #ffffff;
  font: 12px;
  border: none;
  border-radius: 4px;
  font-size: 12px;

  border-radius: 5px;
  margin-left: 171px;
  cursor: pointer;
  display: flex;
  justify-content: center; 
  align-items: center;
`;

export const SelectedButton = styled(SelectButton)`
background-color: #D9D9D9;
  color: #fff;
    border: none;
`;
