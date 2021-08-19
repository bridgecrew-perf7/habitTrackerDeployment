import React,{ Component } from 'react';
import './app.css';

import NavBar from './components/navbar';
import Habits from './components/habits';

class App extends Component {
  state = { habits: []
}
handleIncrement = (habit) => { 
  const habits = this.state.habits.map(item => {
    if (item.id === habit.id) {
      return {...habit, count: habit.count + 1}; // id가 같다면 count증가
    }       // ...Obj.(= deconstructing Obj): 안에 있는 데이터는 똑같이 복사해오고 외부 Obj만 새로운 것으로.
    return item; //같지 않다면 단순 item리턴
  })
  this.setState({ habits });
};                                              
handleDecrement = (habit) => {
 const habits = this.state.habits.map(item => {
   if (item.id === habit.id) {
     const count = habit.count - 1; // 카운트가 빠지는데, 
     return {...habit, count: count < 0 ? 0 : count}; //count가 0보다 작으면 0을 아니면 새로운 카운트를
   }
   return item;
 })
 this.setState({ habits });
};
handleDelete = (habit) => {
  const habits = this.state.habits.filter(item => item.id !== habit.id)
  // 로컬변수 habits => filter API를 통해 item전달받고 
  //item.id가 habit.id와 동일하지 않으면 배열을 만들고 삭제되게
  this.setState({ habits });
};
handleAdd = (name) => {
  const habits = [...this.state.habits, {id: Date.now(), name, count: 0}];
  this.setState({ habits });
};
handleReset = (habit) => {
  const habits = [];
  this.setState({ habits });
};
  render() {// UI가 정의된 부분
    return ( 
        <> 
          <NavBar totalCount={this.state.habits.filter(item => item.count > 0).length}/>
          <Habits
            habits={this.state.habits}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            onAdd={this.handleAdd}
            onReset={this.handleReset}
          />
        </>
    );
  }
}

export default App;
