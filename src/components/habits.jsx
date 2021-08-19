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
        this.props.onAdd(name);
    };
    handleReset = (habit) => {
        this.props.onReset(habit);
    };
    render() {
        console.log('habits');
        return ( // 자식요소 둘 HabitAddForm, Habit
            <div className="habits">
                <HabitAddForm onAdd={this.props.onAdd}/>
                <ul>
                    { this.props.habits.map( habit => (
                    <Habit 
                        key={habit.id} // Callback함수들을 props로 전달
                        habit={habit}
                        count={habit.count} //버튼을 누르면 갯수가 변하기 때문에 따로 빼 Obj.로 전달
                        onIncrement={this.props.onIncrement} // +버튼 클릭시 전달된 handleIncrement호출
                        onDecrement={this.props.onDecrement}
                        onDelete={this.props.onDelete}
                        onAdd={this.props.onAdd}
                        onReset={this.props.onReset}/>
                    ))}
                </ul>
                <button className="reset-button" onClick={this.props.onReset}> Reset All </button>
            </div>
        );
    }
}

export default Habits;