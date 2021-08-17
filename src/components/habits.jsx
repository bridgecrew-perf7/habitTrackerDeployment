import React, { Component } from 'react';
import HabitAddForm from './habitAddForm';
import Habit from './habit';

// prop로 전달된 습관들을 Habit이라는 Component로 변경해서 보여주기만 함
class Habits extends Component {
    handleIncrement = (habit) => {
        this.props.onIncrement(habit);
    };                                               
    handleDecrement = (habit) => {
        this.props.onDecrement(habit);
    };
    handleDelete = (habit) => {
        this.props.onDelete(habit);
    };
    handleAdd = (name) => {
        // const habits = [...this.state.habits, {id: Date.now(), name: name, count:0}];
        // this.setState({habits});
        this.props.onAdd(name);
    }
    render() {
        return (
            <div className="habits">
                <HabitAddForm onAdd={this.props.onAdd}/>
                <ul>
                    { this.props.habits.map( habit => (
                    <Habit 
                        key={habit.id} habit={habit} // Callback함수들을 props로 전달
                        onIncrement={this.props.onIncrement} // +버튼 클릭시 전달된 handleIncrement호출
                        onDecrement={this.props.onDecrement}
                        onDelete={this.props.onDelete}/>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Habits;