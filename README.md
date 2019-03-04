# ReactStudy
혼자하는 리액트 스터디

### 1. todo-list (2019-01-27~2019-02-17)
1. handleToggele() 이해
- App => TodoItemList => TodoItem
 : TodoItem에서 넘겨준 인덱스로 App의 status.todos의 id와 비교 
2. handleCreate() 이해
3. 컴포넌트 최적화
4. 숙제: 팔레트 기능 추가
5. 고객(수지) 요구사항1: 중요(☆)표시를 만들어주세요
6. 고객(수지) 요구사항2: 수망이 사진을 배경으로 넣어주세요
7. **input에 내용 입력 안했을 때 추가되지 않도록 막는 이벤트 추가**
8.  **input에 default value 추가**
9.  *복습*(*다시만들어보기*) -X
10. material-ui 에서 버튼적용 -X

> 참고(https://velopert.com/3480)

### 2. react-textbook (2019-03-02~) 
> 리액트 교과서
1. ch01/hello-world
- 정적인 HTTP 웹서버 만들기
    -  [Bitnami](https://opentutorials.org/course/3084/18893)
    -  node http-server 구축
        - npm install -g http-server
2. ch02 
- 리팩토링(script파일 분리)
- 자식엘리먼트로 부모컴포넌트의 속성(props) 전달
3. ch03 (교재 3.3)
- JSX 적용(babel-cli)
  - package.json에 명령어 저장해놓고 npm run build-PROJECT_NAME으로 jsx파일을 js파일로 transpile한다.
-  JSX에서 변수 출력(백틱(`)과 ${varName} 문자열템플릿 이용)