import React from 'react'
import  {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Todos from './components/Todos';
import {useState} from 'react';
import Header from './components/layout/Header'
import AddToDo from './components/AddToDo'
//import {v4 as uuid} from 'uuid';
import About from './components/pages/About';
import axios from 'axios';


function App() {
  let data =[]

  function componentDidMount(){
    if(notRendered){
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
    .then(res=> {
      setTodos(res.data);
      setNotRendered(false);
      }
    );

  }
  }

  const [todos, setTodos] = useState(data);
  const [notRendered, setNotRendered] = useState(true);

  //MarkComplete
  function markComplete(id){
    setTodos(todos.map((todo) => {
      
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }));
  }

  //Delete ToDo
  function delToDo(id){
    //console.log(todos.filter(todo => todo.id !== id));
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res=> setTodos(todos.filter(todo => todo.id !== id)));
    //setTodos(todos.filter(todo => todo.id !== id));
  }

  function addToDo(title){

    // const newToDo = {
    //   id: uuid(),
    //   title,
    //   completed: false
    // }
    axios.post("https://jsonplaceholder.typicode.com/todos",{
      title,
      completed: false
    }).then(res=> setTodos([...todos,res.data]))
    //setTodos([...todos,newToDo])
    //console.log(title);
  }

  return (
    <Router>
    <div className="App">

      <div className = "container">
      <Header/>
      <Route exact path="/" render={props => (
        <React.Fragment>
          {componentDidMount()}
          <AddToDo addToDo = {addToDo}/>
          <Todos todos = {todos} markComplete = {markComplete} delToDo = {delToDo}/>
        </React.Fragment>
      )}/>
      <Route path="/about" component={About}/>
      </div>
    </div>
    </Router>
  );
}



export default App;