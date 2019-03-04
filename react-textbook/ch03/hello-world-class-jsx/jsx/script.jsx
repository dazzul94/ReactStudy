let helloWorldReacElement = <h1>Hello worold!!</h1>;

class HelloWorld extends React.Component {
    render() {
        return (
            <div>
                {helloWorldReacElement}
                {helloWorldReacElement}
            </div>
        )
    }
}


ReactDOM.render(
    <HelloWorld/>,
    document.getElementById('content'));