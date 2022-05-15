import './App.css';
import Header from './MyComponents/Header';
import  Todos  from './MyComponents/Todos';
import  Footer from './MyComponents/Footer';
import AddTodo from './MyComponents/AddTodo';
import About from './MyComponents/About';
import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

 function App() {
  let initTodo;
  if(localStorage.getItem("todos") === null)
  {
    initTodo = [];
  }
  else
  {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete =(todo) => {
      console.log("OnDelete function activated",todo);

      setTodos(todos.filter((e) => {
        return e!==todo;
      }));

      localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title,desc) => {
    let sno;
    if(todos.length === 0)
    {
      sno=0;
    }
    else
    {
      sno= todos[todos.length-1].sno + 1;   // -> todos[2].sno + 1 ==> 3 + 1 => 4
    }
  
    const myTodo = {
      sno : sno,
      title : title,
      desc : desc
    }
    setTodos([...todos, myTodo]);
  }

  const [todos, setTodos] = useState(initTodo);

  // whenever todos get changed by user, useEffect runs & update todos.
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
    <Router>
    <Header title="Todolist App" subtitle="list of todos"/>
    <Routes>
          <Route exact path="/" element = 
          {
          <>
          <AddTodo addTodo={addTodo}/>
          <Todos tod={todos} onDelete={onDelete}/>
          </>
          }/>
          <Route exact path="/about" element={<About/>}/>    
    </Routes>    
    <Footer/>
    </Router>
    </>
  );
}

export default App;
