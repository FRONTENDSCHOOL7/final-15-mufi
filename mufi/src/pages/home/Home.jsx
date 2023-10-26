import React from 'react'
import HomeHeader from '../../components/headers/HomeHeader'
import HomeEmpty from './HomeEmpty'
import HomeFeed from './HomeFeed'
import * as H from "./HomeStyle"
import img from '../../assets/basic-profile-small.png'
import postImgContent from '../../assets/example-img.jpeg'
import NavBar from '../../components/navBar/NavBar'

export default function Home() {
  const dataUser = [{
    img,
    title: '위니브 애월읍',
    content: 'weniv_aewol',
  },
  {
    img,
    title: '위니브 감귤농장',
    content: 'weniv_tangerin'
  }]

  let dataPost = [{
    ...dataUser,
    postImgContent,
    postTextContent: '옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게 뛰노는 인생의 힘있다.',
    like: 10,
    commentNum: 10,
    tags: [
      '후라이의꿈', '계란후라이', '재즈페스티벌짱', '재미쏭쏭', '악뮤', 'AKMU', '서울맛집', '워터밤'
    ]
  },{
    ...dataUser,
    postImgContent,
    postTextContent: '옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게 뛰노는 인생의 힘있다.',
    like: 10,
    commentNum: 10,
    tags: [
      '후라이의꿈', '계란후라이', '재즈페스티벌짱', '재미쏭쏭', '악뮤', 'AKMU', '서울맛집', '워터밤'
    ]
  }]
  // dataPost = [];
  
  return (

    <>
      <H.HLayout>
        <HomeHeader />
        { dataPost.length ? <HomeFeed dataPost={dataPost} /> : <HomeEmpty />}
        <NavBar></NavBar>
      </H.HLayout>
    </>
  )
}