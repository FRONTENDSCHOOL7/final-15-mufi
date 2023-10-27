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
export const SearchResult = styled.div`
  height: 25px;
  padding: 14px 8px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  align-items: center;

  border-bottom: 1px solid #efefef;
`;

// 검색 결과 리스트를 보여주는 styled components
export const SearchList = styled.div`
  width: 100%;
  padding: 12px 16px 9px;
  box-sizing: border-box;
`;

export const HighlightedText = styled.span`
  color: #2033e7;
`;

export const AddTagBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 34px;
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  background-color: #2033e7;
  margin: auto; // 추가

  border-radius: 4px;
  border: none;
`;
