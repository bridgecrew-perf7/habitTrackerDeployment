import React,{ Component } from 'react';
import './app.css';

import NavBar from './components/navbar';
import Habits from './components/habits';

class App extends Component {
  state = {
    habits: [
        {id: 1, name: 'Reading', count: 0},
        {id: 2, name: 'Running', count: 0},
        {id: 3, name: 'Coding', count: 0},
    ]
}
handleIncrement = (habit) => { // Callback 함수를 통해 각각의 컴포넌트에 들어있는 인자로 전달됨
  const habits = [...this.state.habits]; //... spread operator: 새로운 배열안에 같은 내용의 아이템들을 복사해 옴
  const index = habits.indexOf(habit); //index는 habits의 몇번째 index에있는지 찾을 수 있게
  habits[index].count++;
  this.setState({ habits }); // = this.setState({habits: habits});
};                                               // key  : value
handleDecrement = (habit) => {
  const habits = [...this.state.habits];
  const index = habits.indexOf(habit);
  const count = habits[index].count -1;
  habits[index].count = count < 0 ? 0 : count; // 0이하로 내려가지 않게
  this.setState({ habits });
};
handleDelete = (habit) => {
  const habits = this.state.habits.filter(item => item.id !== habit.id);
  // 로컬변수 habits => filter API를 통해 item전달받고 
  //item.id가 habit.id와 동일하지 않으면 배열을 만들고 삭제되게
  this.setState({ habits });
};
  render() {
    return (
        <>
          <NavBar totalCount={this.state.habits.filter(item => item.count > 0).length}/>
          <Habits
            habits={this.state.habits}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </>
    );
  }
}

export default App;
