import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
const text = 'Hello world'

const el = (
	<>
		<h2>Text: {text}</h2>
		<button type="text">Button</button>
		<input type="text" tabIndex={0}/>
	</>
)
// const el = React.createElement('h2', { className: 'greetings' }, 'Hello world')

root.render(el)
