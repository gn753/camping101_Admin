## 디렉토리 구조

### 1. 폴더구조

- components: 공통 컴포넌트를 모아놓는곳 ex:      Pagination,layouts 등 
  - base : 버튼등의 기본적인 컴포넌트들만
  - Pagination
  - layouts 

- features : 각 페이지별로 그룹화
  - components: 각 페이지안의 컴포넌트 모음  
  - service : 비즈니스 로직  
  - type : 타입   

- pages: 각 페이지 root index,js만 담당   

### 2.  라이브러리 목록
- emotion : css in js 
- nanoid: react map함수에서 랜덤 key값을 생성 
- axios : HTTP 비동기 통신 라이브러리
- eslin : 에어비앤비 스타일가이드
- antd :  admin 디자인 라이브러리
- mome : 날짜 라이브러리
