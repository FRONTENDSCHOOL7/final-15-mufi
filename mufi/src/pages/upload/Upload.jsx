import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as U from './UploadStyle';
import UploadHeader from '../../components/headers/UploadHeader';
import TagList from '../../components/post/TagList';
import profileSmall from '../../assets/basic-profile-small.png';
import festivalImage from '../../assets/guitar-fill.png';
import hashtagImage from '../../assets/hashtag-fill.png';
import imageUploadImage from '../../assets/image-fill.png';
import deleteImage from '../../assets/x.png';

import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import {
  festivalState,
  isEditState,
  postContentState,
  postImageState,
  postInfoState,
  tagsState,
  userTokenState,
} from '../../Atoms/atoms';
import { uploadPostAPI } from '../../api/uploadPostAPI';
import { editPostAPI } from '../../api/editPostAPI';

export default function Upload() {
  const [profileImg, setProfileImg] = useState(profileSmall);
  const [postContent, setPostContent] = useRecoilState(postContentState);
  const [selectedImages, setSelectedImages] = useRecoilState(postImageState);
  const [festival, setFestival] = useRecoilState(festivalState);
  const [tags, setTags] = useRecoilState(tagsState);
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  const postInfo = useRecoilValue(postInfoState);
  const token = useRecoilValue(userTokenState);
  const resetFestival = useResetRecoilState(festivalState);
  const resetTags = useResetRecoilState(tagsState);
  const resetContent = useResetRecoilState(postContentState);
  const resetImage = useResetRecoilState(postImageState);
  const resetPostInfo = useResetRecoilState(postInfoState);

  const postInputRef = useRef(null);
  const fileInputRef = useRef();
  const selectedImagesContainer = useRef();

  const navigate = useNavigate();

  // 페이지이동
  const openFestivalAdder = () => {
    navigate('/upload/festival');
  };
  const openHashtagAdder = () => {
    navigate('/upload/hashtag');
  };

  // 글 내용 바뀔때마다
  const handleContentChange = (e) => {
    setPostContent(e.target.value);
  };
  // 글 내용에 따라 스크롤 높이 조절
  useEffect(() => {
    postInputRef.current.style.height = 'auto'; // 높이를 초기화
    postInputRef.current.style.height = `${postInputRef.current.scrollHeight}px`; // 스크롤 높이만큼 높이를 설정
  }, [postContent]);

  // 이미지 업로드
  const handleFileButtonClick = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };
  const handleFileSelect = async (e) => {
    const file = e.target.files[0];
    await uploadImage(file);
  };
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
    setSelectedImages([...selectedImages, imageUrl]);
    // url로 만든 배열
  };
  // 이미지 삭제
  const handleRemoveImage = (index) => {
    setSelectedImages((oldImages) => oldImages.filter((_, i) => i !== index));
  };

  // 업로드 버튼 클릭
  const handleSubmit = async (e) => {
    e.preventDefault();

    let res;
    const post = {
      content: `content:${postContent}\n\\festival:${festival}\\tag:${tags}`,
      image: selectedImages.join(''),
    };

    // 수정 or 업로드 분기
    if (isEdit) {
      const postId = isEdit;
      console.log(postId);
      res = await editPostAPI({ token, postId, post });
    } else if (isEdit === false) {
      res = await uploadPostAPI({ token, post });
    }

    if (res) {
      resetFestival();
      resetTags();
      resetContent();
      resetImage();
      resetPostInfo();
      navigate(`/postDetail/${res.data.post.id}`);
      console.log(res);
    }
  };

  // postInfo에 값이 있으면 '수정'!
  useEffect(() => {
    if (postInfo.id !== undefined) {
      setIsEdit(postInfo.id);
      const regExpTag = /(content:|\\|tag:|festival:)/g;
      const contents = postInfo.content.split(regExpTag);

      if (contents[2]) {
        const textContent = contents[2];
        setPostContent(textContent);
      }

      if (contents[contents.length - 1]) {
        const tags = contents[contents.length - 1].split(',');
        setTags(tags);
      }

      if (contents[6]) {
        const festival = contents[6].split(',');
        setFestival(festival);
      }

      if (postInfo.image) {
        setSelectedImages([postInfo.image]);
      }
    }
    resetPostInfo();
  }, [postInfo]);

  return (
    <U.UploadWrapper>
      <UploadHeader formid={'form-post'} />
      <U.UploadContent id="form-post" onSubmit={handleSubmit}>
        {/* ---- 추가 버튼 ---- */}
        <U.ContentLayout>
          <U.ProfileImage src={profileImg} alt="프로필 이미지" />
          <U.InputWithImage>
            <U.PostInput
              ref={postInputRef}
              value={postContent}
              onChange={handleContentChange}
              placeholder="게시글 입력하기..."
            />
            <U.SelectedImagesContainer ref={selectedImagesContainer}>
              {selectedImages.map((img, index) => (
                <U.ImageBox key={index}>
                  <U.SelectedImage src={img} />
                  <U.RemoveImageButton
                    src={deleteImage}
                    onClick={() => handleRemoveImage(index)}
                    alt="Remove"
                  />
                </U.ImageBox>
              ))}
            </U.SelectedImagesContainer>
          </U.InputWithImage>
        </U.ContentLayout>
        {/* ---- 추가 버튼 ---- */}

        {/* ---- 추가 버튼 ---- */}
        <U.ButtonContainer>
          <U.Button onClick={openFestivalAdder}>
            <U.ButtonImage src={festivalImage} alt="festival" />
            {festival.length ? (
              <TagList tags={festival} isFestival={true} removeBtn={true}></TagList>
            ) : (
              '페스티벌 추가하기'
            )}
          </U.Button>

          <U.Button onClick={openHashtagAdder}>
            <U.ButtonImage src={hashtagImage} alt="hashtag" />
            {tags.length ? (
              <TagList tags={tags} removeBtn={true}></TagList>
            ) : (
              '해시 태그 추가하기'
            )}
          </U.Button>

          <U.Button type="button" onClick={handleFileButtonClick}>
            <U.ButtonImage src={imageUploadImage} alt="image upload" />
            사진 추가하기
          </U.Button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleFileSelect}
          />
        </U.ButtonContainer>
        {/* ---- 추가 버튼 ---- */}
      </U.UploadContent>
    </U.UploadWrapper>
  );
}
