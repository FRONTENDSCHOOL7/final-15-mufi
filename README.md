# 🎼MUFI

## 1. 🎺 Mufi 소개

<img src='https://raw.githubusercontent.com/FRONTENDSCHOOL7/final-15-mufi/develop/mufi/src/assets/mufiMain.png' alt='mufiMain'>

<br />
Mufi는 **페스티벌을 좋아하는 사람들이 모여 소통하는 SNS 플랫폼**입니다.<br />
Music(음악) + Fiesta(축제)를 합친 Mufi는

### [배포 URL] ()

```
💫TEST 계정
ID: heehee00@mufi.com
PW: heehee00
```

</br>

## 2. 🧑‍💻 팀 소개

안녕하세요! 저희는 4명의 Front-end 개발자로 구성된 '**희희영영**'입니다.<br />
이름의 한글자씩 따서 만든 팀명입니다!

|                                             **박소영**                                             |                                            **박소희**                                             |                                             **양희준**                                             |                                             **이부영**                                             |
| :------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------: |
| <img width="180" alt="sy_profile_img" src="https://avatars.githubusercontent.com/u/128986073?v=4"> | <img width="180" alt="sh_profile_img" src="https://avatars.githubusercontent.com/u/41767015?v=4"> | <img width="180" alt="hj_profile_img" src="https://avatars.githubusercontent.com/u/112550610?v=4"> | <img width="180" alt="by_profile_img" src="https://avatars.githubusercontent.com/u/123431761?v=4"> |
|                             [soyoung03](https://github.com/soyoung03)                              |                                [sthgml](https://github.com/sthgml)                                |                               [yhj0217](https://github.com/yhj0217)                                |                                [olivu0](https://github.com/olivu0)                                 |
|                                         문서화 & 소통 리더                                         |                                        디자인 & 기획 리더                                         |                                             개발 리더                                              |                                              팀 리더                                               |

<br />

## 3. 🥦 개발환경

### ⌨️ 기술스택

<table>
<tr>
 <td align="center" width="100px">사용 기술</td>
 <td width="800px">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=ffffff"/>&nbsp  
  <img src="https://img.shields.io/badge/Recoil-764ABC?style=for-the-badge&logo=Redux&logoColor=white"/>&nbsp 
   <img src="https://img.shields.io/badge/React%20Router-CA4245?style=for-the-badge&logo=ReactRouter&logoColor=white"/>&nbsp 
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>&nbsp 
   <img src="https://img.shields.io/badge/axios-7F2B7B?style=for-the-badge&logo=axios&logoColor=white"/>&nbsp 
   <!-- <img src="https://img.shields.io/badge/babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=white"/>&nbsp -->
    </td>
</tr>
<tr>
 <td align="center">패키지</td>
 <td>
    <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=NPM&logoColor=ffffff"/>&nbsp 
  </td>
</tr>
<tr>
 <td align="center">포맷터</td>
 <td>
  <img src="https://img.shields.io/badge/Prettier-373338?style=for-the-badge&logo=Prettier&logoColor=ffffff"/>&nbsp 
 <img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white">
 </td>
</tr>
<tr>
 <td align="center">협업</td>
 <td>
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>&nbsp 
    <img src="https://img.shields.io/badge/Notion-5a5d69?style=for-the-badge&logo=Notion&logoColor=white"/>&nbsp
    <img src="https://img.shields.io/badge/Discord-4263f5?style=for-the-badge&logo=Discord&logoColor=white"/>&nbsp  
 </td>
 <tr>
  <td align="center">디자인</td>
 <td>
    <img src="https://img.shields.io/badge/Figma-d90f42?style=for-the-badge&logo=Figma&logoColor=white"/>&nbsp  
 </td>
</tr>
<tr>
 <td align="center">IDE</td>
 <td>
    <img src="https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white"/>&nbsp
</tr>
</table>

### 기술스택을 선택한 이유

- Styled-Component: 스타일을 따로 정의해 코드의 가독성과 유지보수성을 높이기 위해 사용

- Recoil : 대규모 상태를 관리해야 하는 프로젝트에서는 redux를 사용하는 것이 좀 더 적합할 것이라고 판단함. 또한 이런 대규모 상태를 감시, 디버깅하기 위한 안정적인 devTool도 가지고 있기 때문에 안정성 면에서는 redux가 더 낫다고 생각함. <br>
  그러나 지금 개발하는 프로젝트는 제공되는 API를 사용해서 대규모 데이터를 다루는 것도 아니고, 기한도 길지 않기 때문에 상대적으로 적은 코드를 작성하고 러닝 커브가 적은 recoil이 redux에 비해 유리하다고 생각함. <br>
  결론적으로, 더 직관적이고 간단한 구조를 가진 recoil을 현재 프로젝트의 상태관리 라이브러리로 확정함.

- Axios : 모듈 설치를 해야한다는 단점이 존재하지만 Promise 기반으로 만들어졌기 떄문에 데이터를 다루기에 편리함. 구형 브라우저 지원이 뛰어남.<br>
  비동기로 http 통신이 가능하며 return을 promise 객체로 해주기 때문에 response 데이터를 다루기 쉬움

- React Router : 리액트는 Single Page Application임. 즉, 모든 컴포넌트의 변화가 하나의 페이지 안에서 일어남. 다른 URL로 이동하면 페이지 전체가 교체되는 것이 아니라 한 페이지 내부에서 컴포넌트의 변화만 일어남. 이런 환경에서 사용자는 원하는 페이지에 북마크를 할 수도 없고 히스토리가 생기지 않아 뒤로가기 기능을 사용할 수도 없음. 이러한 리액트의 단점을 react router로 보완함
  <br>
  react router을 사용함으로써 업데이트 된 부분만 새로 렌더링됨.
  <br>
  즉, React router는 리액트에 path를 추가해 기존의 장점을 유지하면서 단점까지 개선함

### Github Flow

main: 배포가 될 branch
develop: 기능 개발이 완료된 각각의 branch가 합쳐지는 곳으로, 2명의 조원의 승인 후에 merge 됨. 오류가 나지 않는, 충돌이 일어나지 않는 상태에서만 develop에서 main으로 넘김.

### Git Branch

각자 issue 생성 후 issue branch를 만들어 작업

<br />

## 4. 역할 분담

<br />

### 협업 방식

기획, 디자인 작업시, 빠른 피드백과 소통을 위해 회의시간을 길게 가짐<br />
개발 작업 시작 후, 오전 10시와 오후 4시에 중간점검을 함<br />
오류 발생시, 디스코드에서 즉각적인 소통과 피드백이 이루어짐

<br />

## 5. 개발 기간 (23.10.13 - 23.11.07)

| 기간              |                                                                                                  |
| ----------------- | ------------------------------------------------------------------------------------------------ |
| **10/13 - 10/20** | - 주제 선정, 기술 스택 및 협업툴 결정<br>- Figma 디자인 작업 및 기획, 컨벤션<br>- git 협업 study |
| **10/21 ~ 10/27** | - 초기 개발환경 세팅<br>- 페이지 단위로 UI 나눠서 UI 구현 작업 시작                              |
| **10/28 - 11/05** | - API study <br>- API 통신 작업 시작                                                             |
| **11/06 - 11/08** | - 에러 수정<br>- 배포<br>- README 작성                                                           |

<br />

## 6. UI

피그마URL

<br />

## 7. 기능 소개

### 각 페이지 기능

<br />

## 8. 팀 컨벤션

### 커밋컨벤션

| ✨ feat     | 기능 추가, 삭제, 변경                                                                   |
| ----------- | --------------------------------------------------------------------------------------- |
| 🐛 fix      | 버그, 오류 수정                                                                         |
| 📝 docs     | README.md, json 파일 등 수정, 라이브러리 설치 (문서 관련, 코드 수정 없음)               |
| 🎨 style    | CSS 등 사용자 UI 디자인 변경 (제품 코드 수정 발생, 코드 형식, 정렬 등의 변경)           |
| ♻️ refactor | 코드 리팩토링                                                                           |
| 🧪 test     | 테스트 코드 추가, 삭제, 변경 등 (코드 수정 없음, 테스트 코드에 관련된 모든 변경에 해당) |
| ⚙️ config   | npm 모듈 설치 등                                                                        |
| 🌱 chore    | 패키지 매니저 설정할 경우, etc 등 (ex. gitignore)                                       |
| 💬 comment  | 필요한 주석 추가 및 변경                                                                |
| 🚚 rename   | 파일 또는 폴더 명을 수정하거나 옮기는 작업만인 경우                                     |
| 🗑️ remove   | 파일을 삭제하는 작업만 수행한 경우                                                      |

### prettier 컨벤션

통일성있는 코드 작성을 위해 prettier을 사용함

```
{
  "tabWidth": 2,
  "singleQuote": true,
  "semi": true,
  "printWidth": 80,
  "trailingComma": "es5"
}
```

<br />

## 9. 이후에 해야할 것들

- 프로젝트 리팩토링
- 컴포넌트 재사용성 높이는 작업
- 렌더링 성능 최적화(속도 개선)
