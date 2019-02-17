import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import Pallete from './components/Pallete';

class App extends Component {
  id = 3; // 이미 0,1,2,3,4가 존재하므로 5으로 설정

  state = {
    input: '',
    todos: [
      {id: 0, text: '수망이랑 놀아주기', checked: false, selectedColor: '#f03e3e', isImportant: true},
      {id: 1, text: '운동', checked: false, selectedColor: '#12b886', isImportant: false},
      {id: 2, text: '샤워', checked: false, selectedColor: '#343a40', isImportant: true}
    ],
    colors: ['#343a40', '#f03e3e', '#12b886', '#228ae6'],
    selectedColor: '#343a40'  //default: 검정색
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value //input의 다음 바뀔 값
    });
  }

  handleCreate = () => {
    const {input, todos, selectedColor} = this.state;  //tip) 변수로 지정해서 사용
    if(input === '') {
      alert("할 일을 입력해주세요.");
      return;
    }
    this.setState({
      input: '',      // 인풋 비우고
      todos: todos.concat({ // concat을 사용하여 배열에 추가
        id: this.id++,
        text: input,
        checked: false,
        selectedColor: selectedColor
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

    /* 
    # findIndex(테스트 함수) 메서드는 
    제공된 테스트 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환합니다. 
    그렇지 않으면 -1을 반환합니다. 
    
    # ES6 화살표 함수
    () => { ... } // 인수가 없을 때
    x => { ... } // 인수가 하나일 때
    (x, y) => { ... } // 인수가 여러 개일 때
    
    x => { return x * x }  // 블록을 사용
    x => x * x  // 표현식. 위와 동일
    =======================================
    todo => todo.id 의 의미 : todo를 인수로 받아서 todo.id를 리턴한다
    그것이 TodoItem이 넘겨준 id와 같은 인덱스를 찾아서 반환한다.
    */

   //파라미터로 받은 id를 가지고 몇번째 아이템인지 찾는다.
    const index = todos.findIndex(todo => todo.id === id);

    const selected = todos[index]; // 선택한 객체
    /*
    # 스프레드 연산자(전개 연산자)
    ex)[...state], {...state} 
    : Array 결합이나 복사 등등
    1. 결합
    var arr1 = ['two', 'three'];
    var arr2 = ['one', ...arr1, 'four', 'five'];
    // expected value : ["one", "two", "three", "four", "five"]
    2. 복사
    var arr = [1,2,3];
    var arr2 = [...arr]; // like arr.slice()
    arr2.push(4)
    // expected value : [1,2,3,4]
    */
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

  handleRemove = (id) => {
    const {todos} = this.state;
    /* 
     # filter() 메서드는 
     주어진 판별 함수를 통과하는 요소를 모아 새로운 배열로 만들어 반환합니다
    */
    this.setState({
      //id가 일치하는거 빼고 새로운 배열로 교체
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  //color를 누르면 input text color가 바뀌어야한다.
  handleColorClick = (colorIdx) => {
    this.setState({
      selectedColor : this.state.colors[colorIdx]
    });
  }

  //color를 누르면 input text color가 바뀌어야한다.
  handleImportantClick = (colorIdx) => {
    const {todos} = this.state;
    const index = todos.findIndex(todo => todo.id === colorIdx);
    const selected = todos[index]; // 선택한 객체
    const nextTodos = [...todos]; // 배열을 복사
    nextTodos[index] = {
      ...selected,
      isImportant: !selected.isImportant
    };
    this.setState({
      todos: nextTodos
    })
  }
 
  render() {
    const { input, todos, colors, selectedColor } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggele,
      handleRemove,
      handleColorClick,
      handleImportantClick
    } = this;
    
    return (
      <div>
        <TodoListTemplate 
          pallete={
            <Pallete 
              colors={colors}
              colorClick={handleColorClick}/>
          }
          form={
            <Form 
              value={input}
              selectedColor={selectedColor}
              onCreate={handleCreate}
              onChange={handleChange}
              onKeyPress={handleKeyPress}/>
          }
        >
          <TodoItemList 
            todos={todos}
            onToggle={handleToggele}
            onRemove={handleRemove}
            onImportantClick= {handleImportantClick}/>
        </TodoListTemplate>
      </div>
    );
  }
}

export default App;
