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
    /*
    컴포넌트 라이프 사이클 메소드중 shouldComponentUpdate 는 
    컴포넌트가 리렌더링을 할 지 말지 정해줍니다. 
    이게 따로 구현되지 않으면 언제나 true 를 반환하는데요, 
    이를 구현하는 경우에는 업데이트에 영향을 끼치는 조건을 return 해주시면 됩니다. 
    우리의 경우에는 todos 값이 바뀔 때 리렌더링 하면 되니까 
    this.props.todos 와 nextProps.todos 를 비교해서 
    이 값이 다를때만 리렌더링하게 설정하면 끝나요!

    컴포넌트를 저장하고 다시 텍스트를 입력해보세요. 컴포넌트가 가장 처음 렌더링 할 때만 id 가 프린트 되지요?
    */
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    }

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