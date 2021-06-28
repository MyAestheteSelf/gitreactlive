import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';
import Header from './MyComponents/Header'
import {Todos} from './MyComponents/Todos'
import {Footer} from './MyComponents/Footer'
import {AddTodo} from './MyComponents/AddTodo'

function App() {
  let initTodos;
  if(localStorage.getItem("todos")===null){
    initTodos=[];
  }
  else{
    initTodos=JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete=(todo)=>{
    console.log("I am deleted",todo);
    setTodos(todos.filter(e=>{
      return e!==todo;
    }))
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const addTodo=(title,description)=>{
    let sno
    if(todos.length===0){
      sno=0;
    }
    else{
    sno=todos[todos.length-1].sno+1;
    }
    const myTodo={
      sno:sno,
      title:title,
      desc:description
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
    
  }
   const [todos, setTodos] = useState([initTodos]);
    useEffect(() => {
      localStorage.setItem("todos",JSON.stringify(todos));
    }, [todos])
   return (
    <>
    <Header title="ToDo"/>
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos}  onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
