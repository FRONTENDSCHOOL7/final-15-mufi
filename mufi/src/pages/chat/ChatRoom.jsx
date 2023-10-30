import React, { memo, useEffect, useRef, useState } from 'react';
import { Layout } from '../../components/Layout/LayoutStyle';
import GoBackMoreHeader from '../../components/headers/GoBackMoreHeader';
import * as C from './ChatStyle';
import ChatBalloon from './ChatBalloon';

export default function ChatRoom() {
  const dataChat = [
    '안녕하세요 맛있는 감귤 사세요.',
    '맛 있는 감귤 1 kg에 얼마에 판매중이신가요?',
    '1kg 10000원,  \n 3kg 2만 5천원 \n 5kg 3만 5천원입니다. 많이 사실 수록 싸게 드리고 있어요. 많이많이 구매해주세요.',
    'ㄴㅇㄹㅁㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㅊㄴㅊㅋㄴㅊㅋㄴㅇㅊㄴㅇㄹㅁㅇㄹㅁㅈㄷㄹㅁㄴㅇㄹ밤고개로23길 8 101호로 배송 부탁드려요.',
    '안녕하세요 맛있는 감귤 사세요.',
    '맛 있는 감귤 1 kg에 얼마에 판매중이신가요?',
    '1kg 10000원,  \n 3kg 2만 5천원 \n 5kg 3만 5천원입니다. 많이 사실 수록 싸게 드리고 있어요. 많이많이 구매해주세요.',
    'ㄴㅇㄹㅁㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㄹㅁㄴㅇㅊㄴㅊㅋㄴㅊㅋㄴㅇㅊㄴㅇㄹㅁㅇㄹㅁㅈㄷㄹㅁㄴㅇㄹ밤고개로23길 8 101호로 배송 부탁드려요.',
  ];

  // chat 기존 거 생성
  const tempChatBalloons = dataChat.map((chat) => {
    return <ChatBalloon chat={chat} />;
  });

  let [chatBalloons, setChatBalloons] = useState(tempChatBalloons);

  // text 인풋 값 받아오기
  const [chatInput, setChatInput] = useState('');
  const handleInputChange = (e) => {
    const newChat = e.target.value;
    setChatInput(newChat);
    console.log(e.nativeEvent.isComposing);
    if (e.nativeEvent.isComposing) {
      return;
    }
  };

  // 전송 button
  const handleSendButton = (e) => {
    if (chatInput === '') {
      alert('메시지를 입력하세요');
      return;
    }
    setChatBalloons([
      ...chatBalloons,
      <>
        <ChatBalloon chat={chatInput} isMyBalloon={true} />
      </>,
    ]);
    const chatInputEl = document.querySelector('#chat-input');
    chatInputEl.value = '';
    setChatInput('');
  };

  // enter 키로 되게
  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      // (() => { handleSendButton() })();
      handleSendButton();
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', handleEnter);
    return () => {
      document.removeEventListener('keydown', handleEnter);
    };
  });

  // 스크롤 아래로 끌어내리기
  useEffect(() => {
    const chatTextContent = document.querySelector('.chat-text-content');
    chatTextContent.scrollTop = chatTextContent.scrollHeight;
  }, [chatBalloons]);

  // 인풋 있으면 액티브 하게 바뀌기
  useEffect(() => {
    const sendBtn = document.querySelector('.chat-send-button');
    if (chatInput !== '') {
      sendBtn.disabled = false;
    } else if (chatInput === '') {
      sendBtn.disabled = true;
    }
    return () => {};
  }, [chatInput]);

  // 사진 업로드
  const [imageHolders, setImageHolders] = useState([]);
  const [imgSrc, setImgSrc] = useState([]);

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

    setImgSrc([...imgSrc, imageUrl]);
    // url로 만든 배열
  };

  const handleUploadImage = (e) => {
    const file = e.target.files[0];
    uploadImage(file);
  };

  // url로 만든 배열로 imageHolders를 여러개 생성하기
  useEffect(() => {
    // console.log(imgSrc)
    const temp = imgSrc.map((src, index) => {
      return (
        <>
          <C.TempImageHolder>
            <C.TempImage src={src} />
            <C.TempImageRemoveBtn onClick={() => handleRemoveBtn(index)} />
          </C.TempImageHolder>
        </>
      );
    });
    setImageHolders(temp);
    console.log(imgSrc);

    if (imgSrc.length > 5) {
      const tempImgWrapper = document.querySelector('.temp-image-wrapper');
      tempImgWrapper.scrollLeft = tempImgWrapper.scrollWidth;
    }
  }, [imgSrc]);

  // removeBtn 누르면 사라지게 하기
  const handleRemoveBtn = (index) => {
    const temp = imgSrc.filter((_, i) => {
      return i !== index;
    });
    setImgSrc(temp);
  };

  return (
    <Layout>
      <GoBackMoreHeader content="애월읍 위니브 감귤농장" />

      <C.ChatTextContent className="chat-text-content">
        {chatBalloons}
      </C.ChatTextContent>

      {imgSrc.length === 0 ? null : (
        <C.TempImageWrapper className="temp-image-wrapper">
          {imageHolders}
        </C.TempImageWrapper>
      )}

      <C.ChatInputWrapper>
        <C.ImgInputLabel htmlFor="input-file"></C.ImgInputLabel>
        <C.ImgInput
          type="file"
          onChange={handleUploadImage}
          accept="image/*"
          id="input-file"
        />

        <C.ChatInput
          id="chat-input"
          placeholder="메시지를 입력하세요."
          onChange={handleInputChange}
        ></C.ChatInput>

        <C.ChatSendButton
          type="button"
          onClick={handleSendButton}
          className="chat-send-button"
        >
          전송
        </C.ChatSendButton>
      </C.ChatInputWrapper>
    </Layout>
  );
}