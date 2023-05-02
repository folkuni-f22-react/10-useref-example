import { useState } from 'react'
import './App.css'
import MyForm from './components/MyForm.jsx'

function App() {
	const [showForm, setShowForm] = useState(false)

	return (
		<div>
			<h1> useRef-exempel </h1>

			<button onClick={() => setShowForm(!showForm)}> Toggla form </button>
			{showForm && <MyForm />}
		</div>
	)
}

export default App
