# **프론트엔드 개발 과제**

# **프로젝트 소개**

- 이 프로젝트는 Webpack 설정을 직접 구성하고, 주어진 요구사항에 따라 동작하는 드래그 앤 드롭 기능을 **react-beautiful-dnd** 라이브러리 로 구현하는 과제입니다.

# **1. 개발 환경**

- Front : React
- 버전 및 이슈관리 : Github
- 디자인 : emotion

# **2. 채택한 개발 기술**

**React, eMotion**

- React
    - 컴포넌트화를 통해 추후 유지보수와 재사용성을 고려했습니다.
- eMotion
    - props를 이용한 조건부 스타일링을 활용하여 상황에 알맞은 스타일을 적용시킬 수 있었습니다.
    - 빌드될 때 고유한 클래스 이름이 부여되어 네이밍 컨벤션을 정하는 비용을 절약할 수 있었습니다.
    - S dot naming을 통해 일반 컴포넌트와 스타일드 컴포넌트를 쉽게 구별하도록 했습니다.

**react-beautiful-dnd**
- react-beatiful-dnd
    - props를 이용한 조건부 스타일링을 활용하여 상황에 알맞은 스타일을 적용시킬 수 있었습니다.

# **3. 프로젝트 구조**

```jsx
├── README.md
├── package-lock.json
├── package.json
├── dist
├── node_modules
├── index.html
├── initialData.js
├── webpack.config.js
└── src
     ├── App.js
     ├── index.js
     │     
     ├── components
     │     ├── Column.jsx
     │     ├── Task.jsx
     │     └── Todo.jsx

```

# **4. 페이지별 기능**

**[Main]**

- Main 컴포넌트는 페이지 전체의 드래그 앤 드롭 기능을 관리하며, 초기 데이터와 드래그 앤 드롭 관련 상태들을 설정하고 관리합니다. 드래그 시작, 업데이트, 종료 시 호출되는 콜백 함수들을 정의하여 드래그 앤 드롭 이벤트를 처리합니다.

**[Column]**

- Column 컴포넌트는 단일 열과 해당 열의 작업들을 렌더링합니다. 각 열은 드래그 앤 드롭 기능을 지원합니다.

**[Task]**

 - Task 컴포넌트는 개별 작업 항목을 렌더링합니다. 이 컴포넌트는 드래그 앤 드롭 기능을 지원하며, 작업의 선택 상태, 드래깅 상태, 유효하지 않은 드래그 상태에 따라 스타일이 변경됩니다.