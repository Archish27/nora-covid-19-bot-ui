import React from 'react'
import { Widget } from 'rasa-webchat'

import Homepage from './Home'

const Index = () => (
	<>
		<Homepage />
		<Widget
			interval={2000}
			socketUrl="http://localhost:5005"
			socketPath="/socket.io/"
			title="Nora Covid-19"
			inputTextFieldHint="Type a message..."
			connectingText="Waiting for server..."
			openLauncherImage="logo-1.svg"
			profileAvatar="logo-white.svg"
			tooltipPayload="/greet"
			params={{
				images: {
					dims: {
						width: 500,
						height: 500,
					},
				},
				storage: 'local',
			}}
		/>
	</>
)

export default Index
