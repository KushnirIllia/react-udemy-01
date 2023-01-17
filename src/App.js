// import logo from './logo.svg'
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

function App() {
	return (
		<div className="App">
			<Header />
			<Field />
			<Btn />
		</div>
	)
}
// export { Header }
export default App
