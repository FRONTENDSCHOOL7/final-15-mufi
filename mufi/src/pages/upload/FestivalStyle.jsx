import styled from 'styled-components';

export const FestivalWrapper = styled.div`
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
  padding-top: 16px;
  padding-left: 37px;
  padding-right: 37px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 32px;
  box-sizing: border-box;
  border-radius: 32px;
  border: none;
  outline: none;
  background-color: #f2f2f2;
  padding: 0;
  padding-left: 16px;

  color: #000;

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

  top: 20px;
  right: 49px;
`;

// 검색 결과를 보여주는 styled components
export const SearchResult = styled.button`
  border: none;
  background-color: transparent;

  padding: 18px 8px;
  width: 100%;
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

// 검색 결과 리스트를 보여주는 styled components
export const SearchList = styled.div`
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  height: calc(100vh - 96px);
  overflow-y: scroll;
`;

export const HighlightedText = styled.span`
  color: #2033e7;
`;

export const AddTagBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 250px;
  line-height: 18px;
  padding: 8px 16px;
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  background-color: #2033e7;
  margin: 16px auto;
  border-radius: 4px;
  border: none;
`;
