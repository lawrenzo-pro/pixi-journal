import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import Card from './Cards'

const MyComponent = (props) => {
    return (
      <div style={{ padding: '30px', backgroundColor: 'lightblue' }}>
        <button>{props.text}</button>
      </div>
    )
  }
  l
const myElement = <MyComponent text="Hello, world!" />
render(myElement, document.querySelector('#app'))
