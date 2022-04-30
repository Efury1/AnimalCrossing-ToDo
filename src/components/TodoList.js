import React, {useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import ReactTooltip from 'react-tooltip';
import DailyQuotes from './DailyQuotes';

function TodoList() {
  const [todos, setTodos] = useState([])

  const addTodo = todo => { //Makes sure if no one types in letter it won't turn up
    if (!todo.text || /^\s*$/.test(todo.test)) {
      return;
    }

    const newTodos = [todo, ...todos]; //spread in other todos
    setTodos(newTodos)
  };

  /*
  * @desc
  */
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.texts)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item ))
  ); //turnery
  }

  /*
  * @desc remove todo
  */
  const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id)
    setTodos(removeArr);
  };


  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>

      <h1>Howdy Partner, </h1>
      <h1> what's your plan for today?</h1>
      <img src={require('./Images/nook.png')} height={ 500} width={500} />
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        />
    </div>
  )
}

export default TodoList;
