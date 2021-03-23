import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';


let city = "Bacelona";

function Hello({message}){
  console.log(message);
  return(
    <div>
      <h1>Welcome to {message}</h1>
    </div>
  )
}

const lakeList = [
  "Echo Lake",
  "Maud Lake",
  "CAscade Lake"
];

//const lakesObject = lakeList.map((lake, i) => ({id:i, value:lake }));  

function Checkbox(){
  const [checked, setChecked] = useState(false);
  return(
    <>
    <input type="checkbox" value={checked} onChange={() => setChecked(checked => !checked)}/>
    <p>{checked? "Checked":"Not Check"}</p>
    </>
  )
}

function GithubUser({login}){
  const [data, setData] = useState(null);
  const url = `https://jsonplaceholder.typicode.com/todos/1`;
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
    console.log('data is ', data)
  },[]);
  console.log('data is ', data)
  if(data){
    return(
      <div>
        <h1>{data.title}</h1>
        
      </div>
    );
  }
  return null;
}

function App(){
  const [year, setYear] = useState(2050);
  const [status, setStatus] = useState("Open");
  const [manager, setManager] = useState("Alex");

  const [val, setVal] = useState("");
  const [val2, setVal2] = useState("");

  useEffect(() => {
    console.log(`field 1: ${val}`)
  },[val]);

  useEffect(() => {
    console.log(`field 2: ${val2}`)
  },[val2]);
  return(
    <>
      <GithubUser/>
      <div>
        <label>Favorite Phrase:</label>
        <input value={val} onChange={(e)=> setVal(e.target.value)}/>
        <br/>
        <label>Favorite Phrase 2:</label>
        <input value={val2} onChange={(e)=> setVal2(e.target.value)}/>
      </div>
      <Checkbox/>
      <h1>Year: {year}</h1>
      <button onClick={() => setYear(year+1)}>Increase Year</button>
      <h1>Manager: {manager}</h1>
      <button onClick={() => setManager("Fenris")}>new manager</button>
      <button onClick={() => setManager("Alex")}>Set back</button>
      <h1>Status: {status}</h1>
      <button onClick={() => setStatus("Closed")}>Close</button>
      <button onClick={() => setStatus("Open")}>Open</button>
    </>
  )
}

ReactDOM.render(
  <App />
  ,
  document.getElementById('root')
);