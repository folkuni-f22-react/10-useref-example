import { useRef } from 'react'

const Camera = () => {
	const videoRef = useRef(null)

	const turnCameraOn = () => assignStream(videoRef.current)
	const turnCameraOff = () => {
		let element = videoRef.current
		element.srcObject = null
	}

	return (
		<div>
			<button onClick={turnCameraOn}> Kamera på </button>
			<button onClick={turnCameraOff}> Kamera av </button>
			<video ref={videoRef} controls autoplay> </video>
		</div>
	)
}

async function assignStream(videoElement) {
	// Inställningsobjekt
	const constraints = { video: true }
	
	// Fråga webbläsaren om vi får lov att använda en kamera
	const stream = await navigator.mediaDevices.getUserMedia(constraints)
	videoElement.srcObject = stream
}


export default Camera
