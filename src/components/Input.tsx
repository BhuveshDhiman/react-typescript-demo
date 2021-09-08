import React from "react"

type inputProps = {
	value: string
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}


export const Input = (props: inputProps) => {
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log(event)
	}
	return (
		<input type="text" name="" id="" value={props.value}
			onChange={handleInputChange} />
	)
}
