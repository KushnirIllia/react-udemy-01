// import logo from './logo.svg'
import { useState } from 'react'
import './App.css'

const Header = () => {
	return <h2>Hello world!</h2>
}
const Field = () => {
	const holder = 'Enter here'
	const styledField = {
		width: '300px',
	}
	return <input type="text" placeholder={holder} style={styledField} />
}

function Btn() {
	const logged = true
	const text = 'Log in'
	return <button>{logged ? 'Enter' : text}</button>
}
function WhoAmI({ name, surname, link }) {
	const [position, setPosition] = useState('')
	const commitInputChanges = (e) => {
		setPosition(e.target.value)
	}

	return (
		<>
			<h1>
				My name is {name()} , surname - {surname}, position - {position}
			</h1>
			<a href={link}>My profile</a>
			<form>
				<span>Enter your profession:</span>
				<input type="text" onChange={commitInputChanges} />
			</form>
		</>
	)
}

function App() {
	return (
		<div className="App">
			<Header />
			<Field />
			<Btn />
			<WhoAmI
				name={() => {
					return 'John'
				}}
				surname={'Smith'}
				link={'link'}
			/>
			<WhoAmI
				name={() => {
					return 'John'
				}}
				surname={'Kushnir'}
				link={'link2'}
			/>
		</div>
	)
}
// export { Header }
export default App
