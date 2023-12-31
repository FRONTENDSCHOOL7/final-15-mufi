import React, { useEffect } from 'react';
import * as SR from './SearchResultStyle';
import BasicImg from '../../../assets/basic-profile-small.png';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { festivalStoreState, keywordState, searchEmptyState, tagStoreState } from '../../../Atoms/atoms';
import hashTagFill from '../../../assets/hashtag-fill.png';
import guitarFill from '../../../assets/guitar-fill.png';

export default function SearchResultItem({ data, url, isSth }) {
  const navigate = useNavigate();
  const keyword = useRecoilValue(keywordState);
  const [searchEmpty, setSearchEmpty] = useRecoilState(searchEmptyState);
  const [tagStore,setTagStore] = useRecoilState(tagStoreState);
  const [festivalStore, setFestivalStore] = useRecoilState(festivalStoreState);

  useEffect(() => {
    setSearchEmpty(false);
  }, []);

  const addList = () => {
    if (isSth === 'tag') {
      if (!tagStore.includes(keyword)) {
        setTagStore([...tagStore, ('#'+keyword)]);
        alert(`#${keyword} 태그가 추가되었습니다!`);
      }
      navigate(`${url}/${keyword}`);
    } else if (isSth === 'festival') {
      if (!festivalStore.includes(keyword)) {
        setFestivalStore([...festivalStore, keyword]);
        alert(`${keyword} (이)가 추가되었습니다!`);
        setSearchEmpty(false);
      }
      navigate(`${url}/${keyword}`);
    }
  };

  // 들어온 데이터 가지고 map돌리기
  const SRItems = data.map((v, i)=>{
    const moveTo = () => {
      if (searchEmpty) {
        navigate('')
      } else {
        if (v.accountname) {
          navigate(`${url}/${v.accountname}`);
        } else if (isSth === "tag") {
          navigate(`${url}/${v.slice(1)}`);
        } else if (isSth === "festival") {
          navigate(`${url}/${v}`);
        }
      }
    }

    const handleImgError = (e) => {
      e.target.src = BasicImg;
    }

    // 태그냐/페스티벌이냐/유저정보냐..
    let contentTitle;
    let contentText;
    let image;
    if (isSth === 'tag') {
      contentTitle = v;
      image = hashTagFill;
    } else if (isSth === 'festival') {
      contentTitle = v;
      image = guitarFill;
    } else {
      contentTitle = v.username;
      contentText = v.accountname;
      image = v.image;
    }

    return (
      <>
        <SR.SRItem onClick={moveTo} key={i}>
          { 
          image && 
          <SR.ResultProfile src={image} alt="프로필이미지" onError={handleImgError} />
          }
  
          <SR.ResultText>
            <SR.ResultTitle>
              {
                contentTitle && 
                  (contentTitle
                    .split(new RegExp(`(${keyword})`))
                    .map((part, index) => 
                      part === keyword ?
                        (<strong key={index}>{part}</strong>) 
                      : (<span>{part}</span>)
                    )
                  )
              }
            </SR.ResultTitle>
            {
              contentText && <SR.ResultContent>
                {contentText
                  .split(new RegExp(`(${keyword})`))
                  .map((part, index) => part === keyword ? (<strong key={index}>{part}</strong>): (<span>{part}</span>)
                  )}
              </SR.ResultContent>
            }
          </SR.ResultText>
        </SR.SRItem>
        {searchEmpty && <SR.AddTagBtn onClick={addList}>'{keyword}' 추가하고 검색하기</SR.AddTagBtn>}
      </>
    )
  })

  return (
    <>
      { SRItems }
    </>
  )
}
