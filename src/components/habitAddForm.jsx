import React, { memo } from 'react';

const HabitAddForm = memo ( props => { // memo는 PureComponent와 비슷: 업뎃이 필요가 없으면 하지않는다
    const formRef = React.createRef();
    const inputRef = React.createRef();

    const onSubmit = (e) => {
        e.preventDefault(); // no refresh
        const name = inputRef.current.value;
        // 로컬변수 name은 현재 inputRef의 value를 받아오는데,
        name && props.onAdd(name);
        //  name이 비어있지않다면 props에 전달된 onAdd라는 콜백함수에 이름을 전달하게
        formRef.current.reset()//this.inputRef.current.value = ''; 입력 초기화
    }; // = this.forRef.current.reset(); 과 위가 동일한 기능
    return (
        <form ref={formRef} className="input-form" onSubmit={onSubmit}>
            <input 
                ref={inputRef} //위 inputRef와 연결
                type="text" 
                className="habit-input"  
                placeholder=" Habit"
                onKeyPress = {
                    (e) => {
                        if(e.key === 'Enter') {
                            console.log('Enter Click');
                        }
                    }
                }
            />
            <button className="input-button"> ADD </button>
        </form>
    );
});

export default HabitAddForm;