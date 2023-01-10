## **소개**

공장/토지부지 중개를 전문으로 하는 부동산 플랫폼입니다. (현재 수정 진행중입니다)

1. 중개 업체는 많은 양의 매물을 등록 및 관리할 수 있습니다.
2. 사용자가 필요한 매물을 빠르고 쉽게 찾을 수 있는 서비스를 제공합니다.
3. 단순 매물 거래 뿐 아니라 중개에 필요한 파일 및 기타 정보를 공유할 수 있습니다.

<br>

## **배포링크**

[**링크**](https://demo.richfactory.click/home)를 클릭하면 이동합니다.

<br>

## **프론트엔드 기술스택**

<p>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/Recoil-DC2829?style=for-the-badge&logo=Recoil&logoColor=black">
  <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white">
  <img src="https://img.shields.io/badge/Styled Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
  <img src="https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=MUI&logoColor=white">
        <img src="https://img.shields.io/badge/React Hook Form-EC5990?style=for-the-badge&logo=reactHookForm&logoColor=white">
  <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=Firebase&logoColor=black">
</p>
<br>

## **디렉토리 구조**

```
📦 src
┣ 📂 components / 재사용 컴포넌트 분리
┣ 📂 layout     / 공통 레이아웃, 기타 레이아웃, 헤더, 푸터
┣ 📂 pages      / 각 페이지 분리
┣ 📂 theme      / material-ui theme 설정
┣ 📂 utils      / 기타 전역 관리, 라우트, 쿠키 설정 파일 등
┣ 📜 App.js
┗ 📜 index.js
```

<br>

## 주요기능

### 🔥 메인 화면

- 지도 마우스오버 시 툴팁으로 매물량을 표시하여 지역별 매물 분포를 확인할 수 있습니다(현재 비활성).
- 배너 애니메이션으로 매물 홍보 관리가 가능합니다.
- 매물 리스트를 미리보기 또는 리스트 형식으로 확인이 가능합니다.

### 🔍 매물 검색

- 매물 종류, 가격대, 면적을 직접 선택하여 상세 검색이 가능합니다.
- 공장/창고, 건물 면적별, 토지 면적별 클릭으로 빠른 검색이 가능합니다.

### ⚓ 네비게이션

- 공장/창고/토지 매매와 임대, 분양 매물, 기타 매물 등 화면별로 매물 리스트를 확인할 수 있습니다.
- 게시판 기능으로 필요한 정보를 공유할 수 있습니다.
- 자주 묻는 질문/답변을 리스트를 확인할 수 있습니다.
- 관리자 로그인시 매물 등록 버튼이 네비게이션 리스트에 추가로 표시됩니다.

### 🏭 매물 등록 및 관리

- 새로운 매물 등록 및 기존 매물 삭제가 가능합니다.
- 매물 이미지 첨부가 가능하고, 매물의 구체적인 정보를 작성할 수 있습니다.
- 제곱미터 단위로 작성한 매물의 평수 확인이 가능합니다.

### 👓 매물 상세보기 페이지

- 매물 사진 및 정보를 확인할 수 있고, 매물의 종류별로 해당하는 정보가 표시됩니다.
  - 매매는 매매가, 임대는 월세와 보증금이 표시됩니다.
  - 공장창고는 건축물 정보가 추가되어 표시됩니다.
- 매물의 평수가 자동 계산되어 표시됩니다.
- 화면 프린트 기능이 제공됩니다

### 📣 게시판 기능

- 비밀글 설정으로 관리자만 확인 가능한 글을 작성할 수 있습니다.
- 하나 또는 여러 개의 파일을 첨부하여 공유할 수 있습니다.

### 🎵 FAQ

- 자주 묻는 질문 및 답변을 확인할 수 있습니다.
- 페이지 이동 없이 토글 형식으로 손쉽게 글 내용 확인이 가능합니다.

### 🔓 관리자 모드

- 쿠키 기반으로 관리자 로그인이 가능합니다
- 관리자 모드에서 매물 등록 및 삭제가 가능합니다
- 관리자 모드에서 게시판 글 삭제가 가능합니다.
