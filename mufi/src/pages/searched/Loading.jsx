import React, { useEffect } from 'react';
import styled from 'styled-components';
import bgLoading from '../../assets/loading.gif'

export const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const LoadingAnimation = styled.img`
  margin-top: -130px;
  width: 150px;
  object-fit: contain;
`

export const LoadingMsg = styled.p`
  font-size: 14px;
  margin : 2px;
  strong {
    color: #2033E7;
  }
  &.desc {
    margin-top: 8px;
    font-size: 12px;
    color: #767676;
  }
`

export const Loading2ndMsg = styled.p`
    font-size: 14px;
    margin : 2px;
`
export default function Loading({ keyword }) {
  return (
    <LoadingContainer>
      <LoadingAnimation src={bgLoading} />
      <LoadingMsg><strong>'{keyword}'</strong> 이(가) 들어간</LoadingMsg>
      <LoadingMsg>게시물을 찾고 있어요!</LoadingMsg>
      <LoadingMsg className='desc'>이 작업은 10초 정도 소요됩니다</LoadingMsg>
    </LoadingContainer>
  )
}
