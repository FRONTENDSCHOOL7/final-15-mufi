import React, { useState, useEffect, useRef, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import * as U from './UploadStyle';
import UploadHeader from '../../components/headers/UploadHeader';
import profileSmall from '../../assets/basic-profile-small.png';
import festivalImage from '../../assets/guitar-fill.png';
import hashtagImage from '../../assets/hashtag-fill.png';
import imageUploadImage from '../../assets/image-fill.png';
import deleteImage from '../../assets/x.png';

export default function Upload() {
  const [profileImg, setProfileImg] = useState(profileSmall);
  const [postContent, setPostContent] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);

  const postInputRef = useRef(null);
  const fileInputRef = useRef();

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
    if (postInputRef.current) {
      postInputRef.current.scrollTop = postInputRef.current.scrollHeight;
    }
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
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImages((oldImages) => [
          ...oldImages,
          reader.result.toString(),
        ]);
      };
      reader.readAsDataURL(file);
    }
  };
  //이미지 삭제
  const handleRemoveImage = (index) => {
    setSelectedImages((oldImages) => oldImages.filter((_, i) => i !== index));
  };

  return (
    <U.UploadWrapper>
      <UploadHeader />
      <U.UploadContent>

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
            <U.SelectedImagesContainer>
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
            페스티벌 추가하기
          </U.Button>

          <U.Button onClick={openHashtagAdder}>
            <U.ButtonImage src={hashtagImage} alt="hashtag" />
            해시 태그
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
