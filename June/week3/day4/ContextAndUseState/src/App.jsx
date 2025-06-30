
import { createContext } from 'react';
import './App.css'
import ChildOne from './components/ChildOne'

let nameContext=createContext();



function App() {
  
  let a=10;
  return (
    <>
      <h1>hello</h1>
      <nameContext.Provider value={"abc"}>
        <ChildOne />
      </nameContext.Provider>
      
    </>
  )
}
export {nameContext}
export default App
