import React from 'react'
import { useContext } from 'react'
import { nameContext } from '../App'

function ChildThree() {

    let name=useContext(nameContext)
  return (
    <div>
        <h1>value is :{name}</h1> <br />
      this is my child 3

    </div>
  )
}

export default ChildThree
