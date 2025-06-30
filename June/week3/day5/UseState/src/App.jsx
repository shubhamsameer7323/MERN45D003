import { useState } from 'react'

import './App.css'

function App() {

  let [count,setCount]=useState(0)

  let [theme,setTheme]=useState("light");


  function handleClick(){
    setCount(count+1)
  }

  function handleTheme(){
    console.log("theme execute")
    if(theme === "light"){
      setTheme("dark")
      console.log(theme)
      document.body.style.backgroundColor="black";
      document.body.style.Color="white";
    } else{
      setTheme("light");
      console.log(theme)
      document.body.style.backgroundColor="white";
      document.body.style.Color="black";
    }
  }

  return (
    <>
    <h1>Hello</h1>
    <h1>value is :{count}</h1> <br />
    <button onClick={handleClick}>Inc</button>

    <br />
    <button onClick={handleTheme}>Toggle</button>  
    </>
  )
}

export default App
