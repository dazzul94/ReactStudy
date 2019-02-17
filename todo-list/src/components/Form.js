import React from 'react';
import './Form.css';

// 이 컴포넌트는 총 4가지의 props 를 받아온다
// value: 인풋의 내용
// onCreate : 클릭 이벤트
// onChange : 내용 바뀔때 이벤트
// onKeyPress : 키 입력시 이벤트(Enter 눌렀을 때 onCreate 하는 작업)
const Form = ({value, selectedColor, onChange, onCreate, onKeyPress}) => {
    return (
        <div className="form">
            <input value={value} 
                   onChange={onChange} 
                   onKeyPress={onKeyPress}
                   style={{color:selectedColor}}/>
            <div className="create-button" onClick={onCreate}>
                추가
            </div>
        </div>
    );
};

export default Form;