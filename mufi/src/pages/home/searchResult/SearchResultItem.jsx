import React from 'react';
import * as SR from './SearchResultStyle';
import img from '../../../assets/basic-profile-small.png';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { keywordState } from '../../../Atoms/atoms';

export default function SearchResultItem({ data, url}) {
  // console.log(data)
  const navigate = useNavigate();
  const keyword = useRecoilValue(keywordState);

  const SRItems = data.map((v, i)=>{
    const moveTo = () => {
      if (v.accountname) {
        navigate(`${url}/${v.accountname}`);
      } else {
        window.location.replace('')
      }
    }

    const handleImgError = (e) => {
      e.target.src = img;
    }

    return (
      <SR.SRItem onClick={moveTo} key={i}>
        { 
        v.image && 
        <SR.ResultProfile src={v.image} alt="프로필이미지" onError={handleImgError} />
        }

        <SR.ResultText>
          <SR.ResultTitle>
            { 
              v.username
                .split(new RegExp(`(${keyword})`))
                .map((part, index) => 
                  part === keyword ?
                    ( <strong>{part}</strong> ) 
                  : (<span>{part}</span>)
                )
            }
          </SR.ResultTitle>
          {
            v.accountname && <SR.ResultContent>
              {v.accountname
                .split(new RegExp(`(${keyword})`))
                .map((part, index) => part === keyword ? (<strong>{part}</strong>): (<span>{part}</span>)
                )}
            </SR.ResultContent>
          }
        </SR.ResultText>
      </SR.SRItem>
    )
  })

  return (
    <>
      { SRItems }
    </>
  )
}
