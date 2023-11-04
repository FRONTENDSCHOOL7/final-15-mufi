import React, { useState } from 'react';
import ProfileChangeStyle from './ProfileChangeStyle';
import Input from '../../components/Input';
import UploadHeader from '../../components/headers/UploadHeader';
import BasicImg from '../../assets/basic-profile-large.png';
import UploadImg from '../../assets/icon-upload-img.png';
import {Img, ImgInputLabel } from './ProfileChangeStyle';
import MusicChangeBtn from '../../components/MusicChangeBtn';
import {Layout} from '../../components/Layout/LayoutStyle';
import { useNavigate } from 'react-router-dom';

export default function ProfileChange() {
  const [userName, setUserName] = useState('');
  const [userNameError, setUserNameError] = useState(''); // 에러메세지
  const [userid, setUserId] = useState('');
  const [userIdError, setUserIdError] = useState('');
  const [imgSrc, setImgSrc] = useState(BasicImg);
  const navigate = useNavigate();
  const onProfile = () => {
    navigate('/profile/');
  }

  // 사용자 이름 유효성 검사
  const userNameValidation = (e) => {
    const nameValue = e.target.value;
    setUserName(nameValue);
    if (nameValue.length >= 2 && nameValue.length <= 10) {
      setUserNameError('');
    } else {
      setUserNameError('2~10자 이내여야 합니다.');
    }
  };

  // 계정 ID 유효성 검사(영문, 숫자, 밑줄 및 마침표)
  const userIdValidation = (e) => {
    const idValue = e.target.value;
    const userIdPattern = /^[A-Za-z0-9._]+$/;
    setUserId(idValue);
    if (!userIdPattern.test(idValue)) {
      setUserIdError('영문, 숫자, 특수문자(.),(_)만 사용가능합니다.');
    } else if (idValue === '') {
      setUserIdError('계정 ID를 입력해주세요.');
    } else {
      setUserIdError('');
    }
  };

  // 이미지 넣기
  const uploadImage = async (imageFile) => {
    const baseUrl = 'https://api.mandarin.weniv.co.kr/';
    const reqUrl = baseUrl + 'image/uploadfile';
    // 폼데이터 만들기
    const form = new FormData();
    form.append('image', imageFile);

    // 폼 바디에 넣어서 요청하기
    const res = await fetch(reqUrl, {
      method: 'POST',
      body: form,
    });
    const json = await res.json();
    const imageUrl = baseUrl + json.filename;
    setImgSrc(imageUrl);
  };

  // 파일 가져오기
  const handleChangeImage = (e) => {
    const imageFile = e.target.files[0];
    uploadImage(imageFile);
  };

  

  return (
    <>
      <Layout>
        <UploadHeader onClick={onProfile} okButtonText="저장" backButtonText=""  />
        {/* 이미지 추가 기능 */}
        <Img src={imgSrc} alt="기본 이미지" />
        {/* type=file 커스텀 */}
        <ImgInputLabel htmlFor="input-file">
          <img src={UploadImg} alt="업로드 이미지 변경" />
        </ImgInputLabel>
        <input
          type="file"
          onChange={handleChangeImage}
          accept="image/*"
          id="input-file"
          style={{ display: 'none' }}
        />
<MusicChangeBtn></MusicChangeBtn>
        <Input
          label="사용자 이름"
          type="text"
          placeholder="2~10자 이내여야 합니다."
          minLength={2}
          maxLength={10}
          onChange={userNameValidation}
          alertMessage={setUserNameError}
          required
        />
        {userNameError && (
          <p
            style={{
              marginTop: '-10px',
              fontSize: '12px',
              color: '#eb5757',
            }}
          >
            {userNameError}
          </p>
        )}
        <Input
          label="계정 ID"
          type="text"
          placeholder="영문, 숫자, 특수문자(.),(_)만 사용가능합니다."
          onChange={userIdValidation}
          alertMessage={setUserIdError}
          required
        />
        {userIdError && (
          <p
            style={{
              marginTop: '-10px',
              fontSize: '12px',
              color: '#eb5757',
            }}
          >
            {userIdError}
          </p>
        )}

        <Input
          label="소개"
          type="text"
          placeholder="자신에 대해서 소개해 주세요!"
        />
        {/* 버튼 컴포넌트 - MUFI 시작하기 */}
      </Layout>
    </>
  );
}
