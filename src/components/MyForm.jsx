import { useRef, useEffect } from 'react'

const MyForm = () => {
	// useRef returnerar ett objekt. Default-värdet är alltid null när vi jobbar med DOM-element.
	const inputNameRef = useRef(null)

	const focusNameInput = () => {
		let element = inputNameRef.current
		element.focus()
	}

	useEffect(() => {
		focusNameInput()
	}, [])

	return (
		<form>

			<input
				ref={inputNameRef}
				type="text"
				placeholder="Ditt namn" />

			<input type="text" placeholder="Din e-postadress" />

			<button type="button" onClick={focusNameInput}> Fokusera namn </button>

		</form>
	)
	// Obs, man måste inte ha button-elementet
}

export default MyForm
