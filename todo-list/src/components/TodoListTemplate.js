import React from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = ({form, children}) => {
    //이 컴포넌트는 함수형 컴포넌트이다 . 
    // 파라미터로 받게 되는 것은 props인데 이를 '비구조화 할당' 하여 
    // 원래 (props) => {...}로 해야하는 것을
    // ({form, children}) => {...} 형태로 작성했다 
    // 이 컴포넌트는 두가지의 props를 받게 된다.
    // children은 <TodoListTemplate>여기에 있는 내용!</TodoListTemplate>
    // form 은 <TodoListTemplate form={<div>이렇게 말이죠.</div>}> --JSX 형태(Javascript + XML) 
    return (
        <main className="todo-list-template">
            <div className="title">
                수지의 오늘 할 일
            </div>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                {children}
            </section>
        </main>
    );
};

export default TodoListTemplate;