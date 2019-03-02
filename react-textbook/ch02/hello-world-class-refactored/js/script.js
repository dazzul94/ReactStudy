let h1 = React.createElement('h1', null, 'Hello world...'); // createElement의 세번째 파라미터의 값이 문자열이면 이는 텍스트값이다.
            
class HelloWorld extends React.Component {  // React 컴포넌트 클래스 정의(이름은 대문자로 시작한다.)
    render() {  // 엘리먼트 하나를 반환하는 함수인 render() 메서드를 생성한다.
        // return 문에는 React엘리먼트를 반환하도록 구현하여 React클래스가 render()를 실행하면 두개의 <h1>엘리먼트를 감싼 <div>엘리먼트를 받을 수 있다.
        return React.createElement('div', null, h1, h1)
    }
}