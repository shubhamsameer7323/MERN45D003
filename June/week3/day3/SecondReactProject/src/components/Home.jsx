import React from 'react'

function Home(props) {
  return (
    <div>
        value is :{props.value}
        <br />
        string value is :{props.str}
      <h2>This is my Home Page </h2>

      <HomeChild value={props.value}/>
      <br />

      obj value name is {props.obj.name}
      <br />
      obj value age is {props.obj.age}

      <br />
      array is :{props.arr[0]}
    </div>
  )
}

export default Home
