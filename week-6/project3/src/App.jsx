/*

import { useState,useEffect } from 'react'
import axios from "axios";
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/todos")
    .then(function(res){
      setTodos(res.data.todos);
    })
  },[])

  return (
    <div>
      {todos.map(todo =><Todo title={todo.title} description={todo.description}/>)}
      </div>
  )
}

function Todo({title,description}){
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default App
*/

/*
 A component that takes a todo id as an input
Fetched the data for that todo from the given endpoint 
and then renders it
*/

/*
import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [click, onclick] = useState(0);
  
  return (
    <div>
      <button onClick={function() {
        onclick(1);
      }}>1</button>
      <button onclick={function(){
        onclick(2);
      }}>2</button>
      <button onclick={function(){
        onclick(3);
      }}>3</button>
      <button onclick={function(){
        onclick(4);
      }}>4</button>
      <Todo id={click} />
    </div>
  )
}

function Todo ({id}){
  const [todos, setTodo] = useState({});

  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/todos?id="+id)
    .then(function(res){
      setTodo(res.data.todos)
      console.log(todos)
    })
  },[id])

  return (
    <div>
      id : {id}
      <h3>{todos.title}</h3>
      <p>{todos.description}</p>
    </div>
  )
}

export default App
*/

/* create an app that 
increases a counter by 1
lets user put a value in an input box and u need to show sum from 1-n
*/
/*
import {useState} from 'react';

function App(){

  let [sum, setSum] = useState(0);
  let [counter, setCounter] = useState(0);
  let [value, setValue] = useState('');

  const updatevalues = (e) => {
    let num = parseInt(e.target.value);
    console.log(num);
    setValue(num);
    //for (let i = 1; i <= num; i++) {
    // sum += i;
    //}
    setSum((num*(num+1))/2);
  }

  return (
    <div>
      <input type="number" value={value} onChange = {updatevalues}></input>
      <h5>Sum is {sum}</h5>
      <button onClick={() => setCounter(counter+1)}>Counter ({counter})</button>
    </div>
  )

}

export default App */

//using useEffect
import {useState,useEffect} from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);
  const [count, setCount] = useState(0);


  //useMemo
  //let count = useMemo (() => {
  //  let finalCount = 0;
  //  for(let i=1; i<=inputValue; i++)
  //    finalCount += i;
  //  return finalCount;
  //},[inputValue]);

  useEffect(() => {
    let finalCount = 0;
    for(let i=0; i<=inputValue; i++){
      finalCount += i;
    }
    setCount(finalCount);
  },[inputValue])

  return (
    <div>
      <input onChange={function(e){
        setInputValue(e.target.value);
      }} placeholder="Find sum from 1 to n"></input>
      <br/>
      Sum from 1 to {inputValue} is {count}
      <br/>
      <button onClick={()=>{
        setCounter(counter+1);
      }}>Counter ({counter})</button>
    </div>
  )
}
export default App