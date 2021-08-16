// habit의 전체적인 내용(+- 버튼, 휴지통)
import React, { Component } from 'react';

class Habit extends Component {
    state = {
        count: 0,
    };

    handleIncrement = () => {
        // state obj 안에있는 count를 증가 한 뒤 '전체적으로'state 업뎃해야 함
        this.setState({count: this.state.count + 1});
    };

    handleDecrement = () => {
        // state obj 안에있는 count를 감소 한 뒤 '전체적으로'state 업뎃해야 함
        const count = this.state.count - 1;
        this.setState({count: count < 0 ? 0 : count});
    };

    render() {
        console.log(this.props.habit)
        const {name, count} = this.props.habit;
        return (
        <li className="habit">
            <span className="habit-name"> {name} </span>
            <span className="habit-count"> {count} </span>
            <button className="habit-button habit-increase" onClick={this.handleIncrement}>
                <i className="fas fa-plus-square"></i>
            </button>
            <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
                <i className="fas fa-minus-square"></i>
            </button>
            <button className="habit-button habit-delete">
                <i className="fas fa-trash"></i>
            </button>
        </li>
        );
    }
}

export default Habit;