import React from 'react';
import Children from './components/Children'
import ColorBox from './components/ColorBox'
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
// import Provider from 'react-redux'

function App() {
  let count = useSelector(state => state.count)
  let boxes = useSelector(state => state.boxes)
  let color = useSelector(state => state.color)


  let dispatch = useDispatch()

  const increaseNum = () => {
    console.log("+1")
    dispatch({ type: "Increment", payload: "" }) //disapatch sends action and action is object

  }

  const renderBox = () => {
    
    console.log("hehe", boxes.length)
    return boxes.map((item, index) => {
      return <ColorBox index={index}/>

    })
  }

  return (
    <div className="App">
      <div className="title">
        {count >=10? <img height="250"src="https://i.imgflip.com/2zhojf.jpg" />
        :
 
        <img src="https://acegif.com/wp-content/uploads/look-at-all-those-chickens.gif" />}

      </div>

      <h2>{count}</h2>
      <button onClick={() => increaseNum()}>Increment</button>
      
      {count <= 0 ? <button disabled="true">Decrement</button>:
      <button onClick={() => dispatch({ type: "Decrement", payload: 1 })}>Decrement</button>}
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
      <input onChange={(e) => dispatch({ type: "Color", payload: e.target.value })}></input>
      <Children></Children>
      {renderBox()}

    </div>
  );
}

export default App;
