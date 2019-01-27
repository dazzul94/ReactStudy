import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {
  id = 5; // 이미 0,1,2,3,4가 존재하므로 5으로 설정

  state = {
    input: '',
    todos: [
      {id: 0, text: '형소법 (1/23 몫)', checked: false},
      {id: 1, text: '경찰학 (1/25 몫)', checked: false},
      {id: 2, text: '형법 예습', checked: false},
      {id: 3, text: '형소법 예습', checked: false},
      {id: 4, text: '오늘 운동 꼭!', checked: false}
    ]
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value //input의 다음 바뀔 값
    });
  }

  handleCreate = () => {
    const {input, todos} = this.state;
    this.setState({
      input: '',      // 인풋 비우고
      todos: todos.concat({ // concat을 사용하여 배열에 추가
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggele = (id) => {
    const {todos} = this.state;

    //파라미터로 받은 id를 가지고 몇번째 아이템인지 찾는다.
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; // 선택한 객체

    const nextTodos = [...todos]; // 배열을 복사

    //기존의 값들을 복사하고, checked 값을 덮어쓰기 
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    })
  }

  render() {
    const { input,todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggele

    } = this;
    
    return (
      <div>
        <TodoListTemplate form={
          <Form 
            value={input}
            onCreate={handleCreate}
            onChange={handleChange}
            onKeyPress={handleKeyPress}/>
        }>
          <TodoItemList 
            todos={todos}
            onToggle={handleToggele}/>
        </TodoListTemplate>
      </div>
    );
  }
}

export default App;
