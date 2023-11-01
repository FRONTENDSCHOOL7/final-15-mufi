import React from 'react';
import SearchResultItem from './SearchResultItem';
import { SRContainer } from './SearchResultStyle';
import img from '../../../assets/basic-profile-small.png';
import iconTag from '../../../assets/hashtag.png';
import iconFes from '../../../assets/guitar.png';
import { useNavigate } from 'react-router-dom';

export default function SearchResult({ isAccount, isTag, isFestival }) {
  // 계정 검색
  const navigate = useNavigate();
  const moveToDetails = () => {
    navigate('/profile');
  };
  const dataUser = [
    {
      img,
      title: '위니브 애월읍',
      content: 'weniv_aewol',
    },
    {
      img,
      title: '위니브 감귤농장',
      content: 'weniv_tangerin',
    },
  ];

  // 태그랑 페스티벌
  const moveToPostList = () => {
    navigate('/postlist');
  };
  const dataTag = ['박재범', '박재범 타투'];
  const dataFestival = ['감귤 축제', '감귤 많이 먹기 대회'];

  return (
    <>
      {isAccount && (
        <SRContainer className="account-result">
          <SearchResultItem data={dataUser} moveTo={moveToDetails} />
        </SRContainer>
      )}

      {isTag && (
        <SRContainer className="tag-result">
          <SearchResultItem
            img={iconTag}
            data={dataTag}
            moveTo={moveToPostList}
          />
        </SRContainer>
      )}

      {isFestival && (
        <SRContainer className="festival-result">
          <SearchResultItem
            img={iconFes}
            data={dataFestival}
            moveTo={moveToPostList}
          />
        </SRContainer>
      )}
    </>
  );
}
