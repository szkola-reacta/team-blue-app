import React from 'react'

const Button = (props) => {
	return (
		<button className="btn btn-outline-secondary">
			{props.children}
		</button>
	)
}

export default Button
