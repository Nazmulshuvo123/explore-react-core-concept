import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Todo";
import Actor from "./Actor";
import Singers from "./Singers";
import BookStore from "./BookStore";

function App() {
  // Main component
  const books = [
    {id: 1, name: 'Bangla', price: 199},
    {id: 2, name: 'English', price: 200},
    {id: 3, name: 'Math', price: 320},
    {id: 4, name: 'Physics', price: 188},
  ]

  const actors = ['shakib', 'rubel', 'Josim', 'Manna', 'Rajib']
  const singers = [
    {id: 1, name:'Atif Aslam', age: 34},
    {id: 2, name:'Arijit Sing', age: 35},
    {id: 3, name:'Kumar shanu', age: 60},
    {id: 4, name:'Natasha Malkova', age: 32},
  ]
  return (
    <>
      <h1>Vite + React</h1>
      <BookStore books={books}></BookStore>

      {
        singers.map(singer => <Singers singer={singer}></Singers>)
      }



      <Actor name={'Bappa Raz'}></Actor>
      {
        actors.map(actor =><Actor name={actor}></Actor>)
      }

      {/* <Todo 
        task= "Learn React" 
        isDone={true}></Todo>
      <Todo 
        task= "Learn Core Concept" 
        isDone={false}></Todo>
      <Todo 
        task= "Try JSX" 
        isDone={true}></Todo> */}

      {/* <Device name="laptop" price="55000"></Device>
      <Device name="mobile" price="34000"></Device>
      <Device name="mobile" price="3000"></Device>
      <Person></Person>
      <Student grade= "4" mark="98"></Student>
      <Student  grade={5} mark="90"></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  );
}
function Device(props){
  // console.log(props)
  return <h2>This device is: {props.name} price is : {props.price}</h2>
}

function Person() {
  const age = 32;
  const money = 20;
  const person = { name: "Shuvo", age: 25 };
  return (
    <h3>
      I am {person.name} with age {person.age}
    </h3>
  );
}

const {grade, mark} = {grade: "4", mark:"98"};

function Student({grade=1, mark=50}) {
  console.log(grade, mark)
  return (
    <div className="student">
      <h3>This is a student</h3>
      <h4>Class: {grade}</h4>
      <h5>Score: {mark}</h5>
    </div>
  );
}

function Developer(){
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid pink',
    borderRadius: '10px'
  }
  return(
    <div style={developerStyle}>
      <h4>Developer</h4>
      <p>Coding:</p>
    </div>
  )
}

export default App;
