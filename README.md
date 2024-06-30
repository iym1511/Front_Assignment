# **프론트엔드 개발 과제**

# **프로젝트 소개**

- 이 프로젝트는 Webpack 설정을 직접 구성하고, 주어진 요구사항에 따라 동작하는 드래그 앤 드롭 기능을 react-beautiful-dnd 라이브러리 로 구현하는 과제입니다.

# **1. 개발 환경**

- Front : HTML, React, emotion, Recoil
- Back-end : 제공된 API 활용
- 버전 및 이슈관리 : Github
- 디자인 : Figma

# **2. 채택한 개발 기술**

**React, eMotion**

- React
    - 컴포넌트화를 통해 추후 유지보수와 재사용성을 고려했습니다.
- eMotion
    - props를 이용한 조건부 스타일링을 활용하여 상황에 알맞은 스타일을 적용시킬 수 있었습니다.
    - 빌드될 때 고유한 클래스 이름이 부여되어 네이밍 컨벤션을 정하는 비용을 절약할 수 있었습니다.
    - S dot naming을 통해 일반 컴포넌트와 스타일드 컴포넌트를 쉽게 구별하도록 했습니다.

**Recoil**

- 필요한 컴포넌트 내부에서만 상태 값을 가져다 사용하기 위해 상태 관리 라이브러리를 사용하기로 했습니다.
- Redux가 아닌 Recoil을 채택한 이유
    - Recoil은 React만을 위한 라이브러리로, 사용법도 기존의 useState 훅을 사용하는 방식과 유사해 학습비용을 낮출 수 있었습니다.
    - 또한 Redux보다 훨씬 적은 코드라인으로 작동 가능하다는 장점이 있었습니다.

# **3. 프로젝트 구조**

```tsx
├── README.md
├── .gitignore
├── package-lock.json
├── package.json
│
├── public
│    └── index.html
└── src
     ├── App.jsx
     ├── index.jsx
     ├── api
     │     └── apiClient.js
     │       
     ├── components
     │     ├── Contents.jsx
     │     ├── DropDownList.jsx
     │     ├── Modal.jsx
     │     └── PrevContents.jsx
     │
     ├── constant
     │     └── config.jsx
     │
     ├── hooks
     │     ├── useAuthToken.jsx
     │     ├── useInfiniteScroll.jsx
     │     ├── useInput.jsx
     │     ├── useIssues.jsx
     │     └── useSaveContents.jsx
     │
     ├── imgs
     │
     ├── pages
     │     ├── ChatPage.jsx
     │     └── Home.jsx
     │
     ├── recoil
     │     └── ctgry.js
     │
     ├── styles
     │     ├── chatPage.js
     │     ├── contents.js
     │     ├── dropdownlist.js
     │     ├── home.js
     │     └── modal.js
     │
     └── util
           └── modal.js

```

# **4. 페이지별 기능**

**[로그인]**

- 이메일 주소와 비밀번호를 입력하면 입력창에서 바로 유효성 검사가 진행되고 통과하지 못한 경우 각 경고 문구가 입력창 하단에 표시됩니다.
- ID는 이메일 형식만 입력 및 사용이 가능해야 합니다.
- 비밀번호는 영문 대소문자 및 숫자만 입력 가능하며 6자 이상입니다.
- 작성이 완료된 후, 유효성 검사가 통과된 경우에만 로그인 가능합니다. 만약 작성하지 않았다면 에러 메세지가 나타납니다.

**[로그아웃]**

- 채팅룸 입장 후 좌측 상단 의 햄버거 바 를 클릭 하면 로그아웃 됩니다.
- 로그아웃시 쿠키에 존재하는 토큰 값을 삭제하고 초기화면으로 이동합니다.

**[채팅방]**

 - 고민 주제 선택하기
    - Modal 창을 띄워서 DropDown컴포넌트를 사용한 고민주제 영역과 고민내용 영역이 나타납니다.
    - Modal 영역 이외의 부분 클릭 시 Modal창이 닫힙니다.
    - 고민 주제나 고민 내용을 작성하지 않고 확인 버튼늘 클릭 했을 때 상황에 맞는 경고문구를 띄워줍니다.
    - 고민 주제 선택을 모두 작성하면 모달 창이 닫히며 상냥이가 답변을 준비하는 동안 채팅 입력 컴포넌트의 조작이 불가능 합니다.
 - 채팅
    - 채팅방에서 메시지를 입력하지않으면 전송버튼이 비활성화 되고 입력을 한 상태에서만 전송 가능합니다.
 - 이전 채팅 불러오기
    - 이전 채팅 불러오기 버튼을 눌러서 이전에 로그인하여 대화했던 영역이 나타납니다.
    - 리버스 인피니티 스크롤을 사용하여 채팅방의 최상단 영역에 도달할 때 마다 이전 채팅이 추가로 나타납니다.
 - 네브 바
    - 좌측 상단 의 햄버거 바 를 클릭하면 로그아웃 됩니다.
    - 우측 상단의 메시지 아이콘 버튼을 클릭하면 새로운 채팅이 시작됩니다.