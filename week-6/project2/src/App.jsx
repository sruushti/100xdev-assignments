import {useState} from 'react';

/*
function App() {
  const [todos, setTodo] = useState([{
    title : "Gym",
    description: "Go to gym"
  },{
    title : "Lunch",
    description : "Have lunch"
  },{
    title : "Sleep",
    description : "Get sleep"
  }]);

  function UpdateTodo(){
    setTodo([...todos, {
      title : "",
      description : ""
    }]);
  }

  return (
    <div>
      <button onClick={UpdateTodo}>Add a Todo</button>
      {todos.map((todo,index) => (
        <Todo key={index} title={todo.title} description={todo.description} />
      ))}
    </div>
  );

}

function Todo({title, description}){
  return(
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}*/
let counter=2;
function App(){
  const [todo, setTodo] = useState ([{
    id : 1,
    title  : "First",
    description : "This is the first todo"
  },{
    id : 2,
    title : "Second",
    description : "This is the second todo"
  }]);

  const updateTitle = (e, id) => {
    const newTitle = [...todo];
    newTitle[id].title = e.target.value;
    setTodo(newTitle);
  }

  const updateDescription = (e, id) => {
    const newDescription = [...todo];
    newDescription[id].description = e.target.value;
    setTodo(newDescription);
  }

  function addTodo(){
    setTodo([...todo, {
      id : counter++,
      title : "",
      description : ""
    }])
  }

  return (
    <div>
      <input type="text" value={todo.title} onChange={(e) => updateTitle(e,counter)}></input><br/>
      <input type="text" value={todo.description} onChange={(e) => updateDescription(e,counter)}></input><br/>
      <button onClick={addTodo}>Add a todo</button>
      <Todo todo={todo}/>
    </div>
  );
}

function Todo({todo}){
  return (
    <div>
      {todo.map((todos, id) => (
        <div>
        <li>{id}</li>
        <h2>{todos.title}</h2>
        <p>{todos.description}</p>
      </div>
      ))}
    </div>
  );
}

export default App
