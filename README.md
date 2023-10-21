# final-15-mufi

### 기술스택

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

1. Recoil : 대규모 상태를 관리해야 하는 프로젝트에서는 redux를 사용하는 것이 좀 더 적합할 것이라고 판단함. 또한 이런 대규모 상태를 감시, 디버깅하기 위한 안정적인 devTool도 가지고 있기 때문에 안정성 면에서는 redux가 더 낫다고 생각함. <br>
   그러나 지금 개발하는 프로젝트는 제공되는 API를 사용해서 대규모 데이터를 다루는 것도 아니고, 기한도 길지 않기 때문에 상대적으로 적은 코드를 작성하고 러닝 커브가 적은 recoil이 redux에 비해 유리하다고 생각함. <br>
   결론적으로, 더 직관적이고 간단한 구조를 가진 recoil을 현재 프로젝트의 상태관리 라이브러리로 확정함.

2. Axios : 모듈 설치를 해야한다는 단점이 존재하지만 fetch에는 없는 response timeout 처리 방법이 존재함. Promise 기반으로 만들어졌기 떄문에 데이터를 다루기에 편리함. 구형 브라우저 지원이 뛰어남.<br>
   비동기로 http 통신이 가능하며 return을 promise 객체로 해주기 때문에 response 데이터를 다루기 쉬움

3. React Router : 리액트는 Single Page Application임. 즉, 모든 컴포넌트의 변화가 하나의 페이지 안에서 일어남. 다른 URL로 이동하면 페이지 전체가 교체되는 것이 아니라 한 페이지 내부에서 컴포넌트의 변화만 일어남. 이런 환경에서 사용자는 원하는 페이지에 북마크를 할 수도 없고 히스토리가 생기지 않아 뒤로가기 기능을 사용할 수도 없음. 이러한 리액트의 단점을 react router로 보완함
   <br>
   react router을 사용함으로써 업데이트 된 부분만 새로 렌더링됨. 각각의 컴포넌트마다 URL이 생겼기 때문에 북마크, 히스토리 기능 사용 가능.
   <br>
   즉, React router는 리액트에 path를 추가해 기존의 장점을 유지하면서 단점까지 개선함

### Github Flow

main: 배포가 될 branch
develop: 기능 개발이 완료된 각각의 branch가 합쳐지는 곳으로, 2명의 조원의 승인 후에 merge 됨. 오류가 나지 않는, 충돌이 일어나지 않는 상태에서만 develop에서 main으로 넘김.

### folk

하나의 중앙 원격 저장소를 각자가 fork해서 팀원마다 각자 저장소를 가지고 프로젝트를 진행함.<br>
각자 자신의 원격 저장소에 pull하고 팀원의 승인을 받아 merge하기 때문에 위험성이 적음. <br>

### 커밋컨벤션

✨ feat: 기능 추가, 삭제, 변경<br>
🐛 fix: 버그, 오류 수정<br>
📝 docs: readme.md, json 파일 등 수정, 라이브러리 설치 (문서 관련, 코드 수정 없음)<br>
🎨 style: CSS 등 사용자 UI 디자인 변경 (제품 코드 수정 발생, 코드 형식, 정렬 등의 변경)<br>
♻️ refactor: 코드 리팩토링<br>
🧪 test: 테스트 코드 추가, 삭제, 변경 등 (코드 수정 없음, 테스트 코드에 관련된 모든 변경에 해당)<br>
⚙️ config: npm 모듈 설치 등<br>
🌱 chore: 패키지 매니저 설정할 경우, etc 등 (ex. gitignore)<br>
💬 comment: 필요한 주석 추가 및 변경<br>
🚚 rename: 파일 또는 폴더 명을 수정하거나 옮기는 작업만인 경우<br>
🗑️ remove: 파일을 삭제하는 작업만 수행한 경우<br>
