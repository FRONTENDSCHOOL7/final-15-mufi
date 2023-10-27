import React, { useState, useEffect, useRef, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import * as U from './UploadStyle';
import UploadHeader from '../../components/uploadheader/UploadHeader';
import profileSmall from '../../assets/basic-profile-small.png';
import festivalImage from '../../assets/guitar-fill.png';
import hashtagImage from '../../assets/hashtag-fill.png';
import imageUploadImage from '../../assets/image-fill.png';
import deleteImage from '../../assets/x.png';

const MemoizedSelectedImage = memo(function SelectedImage({ src, onRemove }) {
  const imageRef = useRef(null);

  useEffect(() => {
    const handleImageLoad = () => {
      imageRef.current.parentElement.scrollLeft =
        imageRef.current.parentElement.scrollWidth;
    };
    imageRef.current.addEventListener('load', handleImageLoad);
    return () => {
      if (imageRef.current) {
        imageRef.current.removeEventListener('load', handleImageLoad);
      }
    };
  }, []);

  return (
    <U.SelectedImagesContainer>
      <U.SelectedImage ref={imageRef} src={src} alt="Selected" />
      <U.RemoveImageButton src={deleteImage} onClick={onRemove} alt="Remove" />
    </U.SelectedImagesContainer>
  );
});

export default function Upload() {
  const [profileImg, setProfileImg] = useState(profileSmall);
  const [postContent, setPostContent] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);

  const contentLayoutRef = useRef(null);
  const navigate = useNavigate();

  const handleContentChange = (e) => {
    setPostContent(e.target.value);
    if (postInputRef.current) {
      postInputRef.current.scrollTop = postInputRef.current.scrollHeight;
    }
  };

  const calculateRows = (text) => {
    return text.split('').length; // 입력된 텍스트의 줄 수를 계산
  };

  useEffect(() => {
    postInputRef.current.style.height = 'auto'; // 높이를 초기화
    postInputRef.current.style.height = `${postInputRef.current.scrollHeight}px`; // 스크롤 높이만큼 높이를 설정
  }, [postContent]);

  const openFestivalAdder = () => {
    navigate('/upload/festival'); // 페스티벌 추가 버튼 클릭 시 /upload/festival로 이동
  };

  const openHashtagAdder = () => {
    navigate('/upload/hashtag'); // 해시태그 버튼 클릭 시 /upload/hashtag로 이동
  };

  const postInputRef = useRef(null);

  const fileInputRef = useRef();

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

  const handleRemoveImage = (index) => {
    setSelectedImages((oldImages) => oldImages.filter((_, i) => i !== index));
  };

  return (
    <U.UploadWrapper>
      <UploadHeader />
      <U.UploadContent>
        <U.ContentLayout ref={contentLayoutRef}>
          <U.ProfileImage src={profileImg} alt="프로필 이미지" />
          <U.InputWithImage>
            <U.PostInput
              안녕하세요
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
      </U.UploadContent>
    </U.UploadWrapper>
  );
}
