import React, {Component} from 'react';
import TodoItem from './TodoItem';

// 이 컴포넌트는 TodoItem 컴포넌트 여러개를 랜더링해주는 역할을 한다
// 리스트를 랜더링하게 될때는, 특히 보여주는 리스트가 동적인 경우에는 함수형이 아닌 클래스형 컴포넌트로 작성해야한다.
// 그 이유는 클래스형 컴포넌트로 작성해야 나중에 컴포넌트 성능 최적화를 할수 있기 때문이다.

// 이 컴포넌트는 3가지의 props를 받게 된다
// todos: todo 객체들이 들어있는 배열
// onToggle : 체크박스를 키고 끄는 함수
// onRemove : 아이템을 삭제시키는 함수 

class TodoItemList extends Component {
    render() {
        const {todos, onToggle, onRemove} = this.props;
        const todoList = todos.map(
            ({id, text, checked}) => (
                <TodoItem
                    id={id}
                    text={text}
                    checked={checked}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={id}
                />
            )
        )
        return (
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoItemList;