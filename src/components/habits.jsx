// 여러 습관들을 등록할 수 있게 만들기
import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    state = {
        habits: [
            {id: 1, name: 'Reading', count: 0},
            {id: 2, name: 'Running', count: 0},
            {id: 3, name: 'Coding', count: 0},
        ]
    }
    handleIncrement = (habit) => { // Callback 함수를 통해 각가의 컴포넌트에 들어있는 인자로 전달됨
        console.log(`handleIncrement ${habit.name}`)
    };
    handleDecrement = (habit) => {
        console.log(`handleDecrement ${habit.name}`)
    };
    handleDelete = (habit) => {
        console.log(`handleDelete ${habit.name}`)

    };

    render() {
        return (
        <ul>
            { this.state.habits.map( habit => (
                <Habit key={habit.id} habit={habit} // Callback함수들을 props로 전달
                    onIncrement={this.handleIncrement} // +버튼 클릭시 전달된 handleIncrement호출
                    onDecrement={this.handleDecrement}
                    onDelete={this.handleDelete}/>
            ))}
        </ul>
        );
    }
}

export default Habits;