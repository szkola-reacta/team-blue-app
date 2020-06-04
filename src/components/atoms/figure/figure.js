import React from 'react'

const Figure = (props) => {
	return (
		<figure>
			<img className={props.className} src={props.src} alt="error"/>
		</figure>
	)
}

export default Figure
