import React, { useState, useEffect } from 'react';
import * as JP from './JoinProfileStyle';
import Input from '../../components/Input';
import Header from '../../components/headers/GoBackHeader';
import BasicImg from '../../assets/basic-profile-large.png';
import UploadImg from '../../assets/icon-upload-img.png';

// api import
import { userIdValidAPI } from '../../api/user/userIdValidApi';
import { joinAPI } from '../../api/user/joinAPI';
import { useLocation, useNavigate } from 'react-router-dom';
import { loginAPI } from '../../api/loginAPI';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  accountnameState,
  userLoginState,
  userTokenState,
} from '../../Atoms/atoms';
import { Helmet } from 'react-helmet-async';

export default function JoinProfile() {
  const [username, setUserName] = useState('');
  const [userId, setUserId] = useState('');
  const [userIntro, setUserIntro] = useState('');

  const [usernameError, setUserNameError] = useState('');
  const [userIdError, setUserIdError] = useState('');

  const [imgSrc, setImgSrc] = useState(BasicImg);
  const [isBtnActive, setIsBtnActive] = useState(true);

  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [isUserIdValid, setIsUserIdValid] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const userEmail = location.state?.email;
  const userPassword = location.state?.password;

  const setUserToken = useSetRecoilState(userTokenState);
  const setUserLoginState = useSetRecoilState(userLoginState);
  const setAccountname = useSetRecoilState(accountnameState);

  // 사용자 이름 유효성 검사
  const userNameValidation = (e) => {
    const nameValue = e.target.value;
    setUserName(nameValue);
    if ((nameValue.length < 2 && nameValue !== '') || nameValue.length > 10) {
      setUserNameError('2~10자 이내여야 합니다.');
      setIsUsernameValid(false);
    } else if (nameValue === '') {
      setUserNameError('사용자 이름을 입력해주세요.');
      setIsUsernameValid(false);
    } else {
      setUserNameError('');
      setIsUsernameValid(true);
    }
  };

  // userId 계정 ID 유효성 검사(영문, 숫자, 밑줄 및 마침표)
  const userIdValidation = (e) => {
    const idValue = e.target.value;
    const userIdPattern = /^[A-Za-z0-9._]+$/;
    setUserId(idValue);
    if (!userIdPattern.test(idValue)) {
      setUserIdError('영문, 숫자, 특수문자(.),(_)만 사용가능합니다.');
      setIsUserIdValid(false);
    } else if (idValue === '') {
      setUserIdError('계정 ID를 입력해주세요.');
      setIsUserIdValid(false);
    } else {
      setUserIdError('');
      setIsUserIdValid(true);
    }
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

  const handleUserIntro = (e) => {
    setUserIntro(e.target.value);
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

  useEffect(() => {
    if (!usernameError && !userIdError) {
      if (!!username && !!userId) {
        setIsBtnActive((prev) => false);
      } else {
        setIsBtnActive((prev) => true);
      }
    } else {
      setIsBtnActive((prev) => true);
    }
  }, [userId, username, usernameError, userIdError]);

  const onSubmitProfile = async (e) => {
    e.preventDefault();
    await joinAPI(username, userEmail, userPassword, userId, userIntro, imgSrc);
    let user = await loginAPI(userEmail, userPassword);
    setUserToken(user.token);
    setUserLoginState(true);
    setAccountname(user.accountname);
    navigate('/home');
  };

  return (
    <>
      <Helmet>
        <title>JOIN PROFILE</title>
      </Helmet>
      <JP.Layout>
        <Header />

        <JP.H1>프로필 설정</JP.H1>
        <JP.P>나중에 언제든지 변경할 수 있습니다.</JP.P>

        <form onSubmit={onSubmitProfile}>
          <JP.InputImageWrapper>
            {/* 이미지 추가 기능 */}
            <JP.Img src={imgSrc} alt="기본 이미지" />
            {/* type=file 커스텀 */}
            <JP.ImgInputLabel htmlFor="input-file">
              <img src={UploadImg} alt="업로드 이미지 변경" />
            </JP.ImgInputLabel>
            <input
              type="file"
              onChange={handleChangeImage}
              accept="image/*"
              id="input-file"
              style={{ display: 'none' }}
            />
          </JP.InputImageWrapper>

          <JP.InputWrapper>
            <Input
              label="사용자 이름"
              type="text"
              placeholder="2~10자 이내여야 합니다."
              minLength={2}
              maxLength={10}
              onChange={userNameValidation}
              alertMessage={setUserNameError}
              required
              value={username}
            />
            <JP.ErrorMessage>{usernameError}</JP.ErrorMessage>
          </JP.InputWrapper>
          <JP.InputWrapper>
            <Input
              label="계정 ID"
              type="text"
              placeholder="영문, 숫자, 특수문자(.),(_)만 사용가능합니다."
              onBlur={userIdDuplicateValid}
              onChange={userIdValidation}
              alertMessage={setUserIdError}
              required
              value={userId}
            />
            <JP.ErrorMessage>{userIdError}</JP.ErrorMessage>
          </JP.InputWrapper>

          <JP.InputWrapper>
            <Input
              label="소개"
              type="text"
              value={userIntro}
              placeholder="자신에 대해서 소개해 주세요!"
              onChange={handleUserIntro}
            />
          </JP.InputWrapper>

          <JP.NextBtn disabled={isBtnActive} type="submit">
            MUFI 시작하기
          </JP.NextBtn>
        </form>
      </JP.Layout>
    </>
  );
}
