// 여러 습관들을 등록할 수 있게 만들기
import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    state = {
        habits: [
            { id: 1, name: 'Reading', count:0 },
            { id: 2, name: 'Running', count:0 },
            { id: 3, name: 'Coding', count:0 },
        ]
    }
    render() {
        return (
        <ul>
            { this.state.habits.map( habit => (
                <Habit key={habit.id} habit={habit}/>
            ))}
        </ul>
        );
    }
}

export default Habits;