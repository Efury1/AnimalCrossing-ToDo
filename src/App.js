import './App.css';
import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import DailyQuotes from './components/DailyQuotes';

function App() {
  return (
    <div className="background">
      <div className="dailyquotes">
        <DailyQuotes />
      </div>
      <div className="todo-app">
        <TodoList/>
      </div>
    </div>
  );
}

export default App;
