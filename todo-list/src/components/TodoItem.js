import React, {Component} from 'react';
import './TodoItem.css';

// 이 컴포넌트는 총 5가지의 props를 전달받게 된다.
// text : todo 내용
// checked : 체크박스 상태 
// id : todo 의 고유 아이디
// onToggle : 체크박스를 키고 끄는 함수 
// onRemove: 아이템을 삭제시키는 함수

class TodoItem extends Component {
    /*
    왜 이부분 추가하면 중요표시 안되지??
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }
    */

    render() {
        const {text, 
               checked, 
               id, 
               selectedColor, 
               isImportant, 
               onToggle, 
               onRemove,
               onImportantClick} = this.props;
        //console.log(id);
        return (
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="important" onClick={(e) => {
                        e.stopPropagation(); 
                        onImportantClick(id)}
                }>
                {isImportant? "★" : "☆"}
                </div>
                <div className={"todo-text " + (checked ? 'checked' : '')}>
                    <div style={{color: selectedColor}}>
                    {text} 
                    </div>
                </div>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation(); //onToggle 이 실행되지 않도록 한다
                    onRemove(id)}
                }>&times;</div>
                {
                        (checked ? <div className="check-mark">✓</div> : '')
                }
            </div>
        );
    }
}
 
export default TodoItem;