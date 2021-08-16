import React from 'react';
import './app.css';
import Habits from './components/habits';

function App() {
  return (
    <>
      <nav className="navbar">

        Habit Tracker 
        <i className="fab fa-pagelines"></i>
      </nav>
        <form className="input-form">
          <input type="text" 
                value=" Habit"
                className="habit-input" />
          <button className="input-button"> ADD </button>
        </form>
        <Habits/>
        <button className="reset-button"> Reset All </button>
    </>
  );
}

export default App;
