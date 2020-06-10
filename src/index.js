import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import {createStore} from 'redux'


const initialState =  {
  count:0,
  // image: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/cow_1f404.png',
  boxes:[],
  colorBoxes:[],
  color: 'yellow',

  
}

function reducer(state=initialState,action){
  if(action.type === 'Increment'){
    state.count++
    state.boxes.push(null)

    
  } else if (action.type === 'Decrement') {
    state.count = state.count - action.payload
    state.boxes.splice(-1)


  }  else if (action.type === 'Reset')  {
    state.count = 0
   state.boxes=[]

  }  else if (action.type === 'Color'){
    state.color = action.payload
    let a = state.colorBoxes.slice()
    a[action.payload.index] = action.payload.color
    state.colorBoxes = a
  }

  return {...state} //grab everything inside of initialState and make new object and return
}

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
    
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
