import React, { useEffect, useRef, useState } from 'react';
import Input from '../../components/Input';
import UploadHeader from '../../components/headers/UploadHeader';
import BasicImg from '../../assets/basic-profile-large.png';
import UploadImg from '../../assets/image-fill.png';
import { Img, ImgInputLabel, InputContainer } from './ProfileChangeStyle';
import MusicChangeBtn from '../../components/MusicChangeBtn';
import { Layout } from '../../components/Layout/LayoutStyle';
import { useNavigate } from 'react-router-dom';
import { profileChangeAPI } from '../../api/profileChangeAPI';
import { userIdValidAPI } from '../../api/user/userIdValidApi';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  accountnameState,
  changedProfileState,
  profileState,
  userTokenState,
} from '../../Atoms/atoms';
import { Helmet } from 'react-helmet-async';

export default function ProfileChange() {
  const [userName, setUserName] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [userid, setUserId] = useState('');
  const [userIdError, setUserIdError] = useState('');
  const [imgSrc, setImgSrc] = useState(BasicImg);
  const [introduction, setIntroduction] = useState('');
  const [isUserIdValid, setIsUserIdValid] = useState(false);
  const [changedProfile, setChangedProfile] =
    useRecoilState(changedProfileState);
  const setAccountname = useSetRecoilState(accountnameState);
  const token = useRecoilValue(userTokenState);
  const navigate = useNavigate();
  const imgInput = useRef();

  // 기존 정보가 뜨게
  useEffect(() => {
    setImgSrc(changedProfile.image);
    setUserId(changedProfile.accountname);
    setUserName(changedProfile.username);
    setIntroduction(changedProfile.intro);
  }, []);

  // 저장 버튼 누르면 api 호출
  const onProfile = async () => {
    const user = {
      userName,
      userid,
      introduction,
      imgSrc,
    };
    // console.log(user);
    await profileChangeAPI({ token, user });
    setAccountname(userid);
    navigate(`/profile/${userid}`);
  };

  // input 값 받아오기 및 유효성 검사
  const handleIntro = (e) => {
    setIntroduction(e.target.value.trim());
    setChangedProfile({
      ...changedProfile,
      intro: introduction,
    });
  };

  const userNameValidation = (e) => {
    const nameValue = e.target.value.trim();
    setUserName(nameValue);
    setChangedProfile({
      ...changedProfile,
      username: userName,
    });
    if (nameValue.length >= 2 && nameValue.length <= 10) {
      setUserNameError('');
    } else {
      setUserNameError('2~10자 이내여야 합니다.');
    }
  };

  const userIdValidation = (e) => {
    const idValue = e.target.value.trim();
    const userIdPattern = /^[A-Za-z0-9._]+$/;
    setUserId(idValue);
    setChangedProfile({
      ...changedProfile,
      accountname: userid,
    });
    if (!userIdPattern.test(idValue)) {
      setUserIdError('영문, 숫자, 특수문자(.),(_)만 사용가능합니다.');
    } else if (idValue === '') {
      setUserIdError('계정 ID를 입력해주세요.');
    } else {
      setUserIdError('');
    }
  };

  // 이미지 클릭해도 인풋 클릭한것과 같게 되게
  const handleImgClick = () => {
    imgInput.current.click();
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
    setChangedProfile({
      ...changedProfile,
      image: imgSrc,
    });
  };

  // 파일 가져오기
  const handleChangeImage = (e) => {
    const imageFile = e.target.files[0];
    uploadImage(imageFile);
  };

  // 인풋 스타일 객체
  const styleEdit = {
    backgroundColor: 'white',
    color: 'black',
  };

  // userId 중복검사
  const userIdDuplicateValid = async (e) => {
    const userDuplicateId = e.target.value;
    setUserId(userDuplicateId);
    const validMessage = await userIdValidAPI(userDuplicateId);
    if (validMessage?.message === '이미 가입된 계정ID 입니다.') {
      setUserIdError('이미 사용 중인 ID입니다.');
      setIsUserIdValid(false);
    } else {
      setIsUserIdValid(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>EDIT PROFILE</title>
      </Helmet>
      <Layout>
        <UploadHeader
          onClick={onProfile}
          okButtonText="저장"
          backButtonText=""
        />
        {/* 이미지 추가 기능 */}
        <Img src={imgSrc} alt="기본 이미지" onClick={handleImgClick} />
        {/* type=file 커스텀 */}
        <ImgInputLabel htmlFor="input-file">
          <img src={UploadImg} alt="업로드 이미지 변경" />
        </ImgInputLabel>
        <input
          ref={imgInput}
          type="file"
          onChange={handleChangeImage}
          accept="image/*"
          id="input-file"
          style={{ display: 'none' }}
        />
        <MusicChangeBtn />
        <InputContainer>
          <Input
            label="사용자 이름"
            type="text"
            placeholder="2~10자 이내여야 합니다."
            minLength={2}
            maxLength={10}
            onChange={userNameValidation}
            alertMessage={setUserNameError}
            styleEdit={styleEdit}
            defaultValue={changedProfile.username}
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
            onBlur={userIdDuplicateValid}
            alertMessage={setUserIdError}
            styleEdit={styleEdit}
            defaultValue={changedProfile.accountname}
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
            onChange={handleIntro}
            styleEdit={styleEdit}
            defaultValue={changedProfile.intro}
          />
        </InputContainer>
      </Layout>
    </>
  );
}
