let helloWorldReacElement = React.createElement(
    'h1',
    null,
    'Hello worold!!'
);

class HelloWorld extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            helloWorldReacElement,
            helloWorldReacElement
        );
    }
}

ReactDOM.render(React.createElement(HelloWorld, null), document.getElementById('content'));
