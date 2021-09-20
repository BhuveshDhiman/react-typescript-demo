import React from 'react'

export type profileProps = {
	name: string
}

export const Profile = ({ name }: profileProps) => {
	return (
		<div>
			Private profile component. Name is {name}
		</div>
	)
}
