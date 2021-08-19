// Class 에서 Hooks로 만들기

import React, { useCallback, useState } from 'react';

//Class가 아니라 함수기 때문에 SimpleHabit 안의 모든 것(props, state, etc.)들이 리랜더링됨 
const SimpleHabit = (props) => { 
    //state = {
    //    count: 0,
    // };                   // 동일한 값을 메모리에 저장하기때문에 초기값을 0으로 설정해도 count값을 기억하고 있음
    const [count, setCount] = useState(0);// 괄호에 초기값 작성, useState호출 시, 
                                            //state의 실제값 count & count 업뎃을 위한 setCount 함수 리턴
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleIncrement = useCallback(() => {
        setCount(count + 1); // 반복해서 호출이 되어도 동일한 콜백함수를 전달하는 리액트에서 제공하는 API
    });
    return (
        <li className="habit">
            <span className="habit-name"> Reading </span>
            <span className="habit-count"> {count} </span>
            <button
            className="habit-button habit-increase"
            onClick={handleIncrement}>
                <i className="fas fa-plus-square"></i>
            </button>
        </li>
    );
};

export default SimpleHabit;