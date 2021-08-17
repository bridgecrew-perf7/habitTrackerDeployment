import React, { Component }from 'react';

class HabitAddForm extends Component {
    inputRef = React.createRef();

    onSubmit = (e) => {
        e.preventDefault(); // no refresh
        const name = this.inputRef.current.value;
        // 로컬변수 name은 현재 inputRef의 value를 받아오는데,
        name && this.props.onAdd(name);
        //  name이 비어있지않다면 props에 전달된 onAdd라는 함수에 이름을 전달하게
        this.inputRef.current.value = ''; // 입력 초기화
    };
    render() {
        return (
            <form className="input-form" onSubmit={this.onSubmit}>
                <input 
                    ref={this.inputRef} //위 inputRef와 연결
                    type="text" 
                    className="habit-input"  
                    placeholder=" Habit"
                />
                <button className="input-button"> ADD </button>
            </form>
        );
    };
}

export default HabitAddForm;