class HelloWorld extends React.Component {
    render() { 
        const { title } = this.props;
        //props가 불변객체인가?
        console.log(Object.isFrozen(this.props));
        return React.createElement('h1', null, title);
    }
}