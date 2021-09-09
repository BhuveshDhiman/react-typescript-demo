import React from 'react'
import { Name } from './Person.types'

type personListProps = {
	names: Name[]
}

export const PersonList = (props: personListProps) => {
	return (
		<div>
			{
				props.names.map(item =>
					<h2 key={item.first}>{item.first} {item.last}</h2>
				)
			}

		</div>
	)
}
