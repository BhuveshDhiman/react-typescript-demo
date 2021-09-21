import React from 'react'

type ListProps<T> = {
	items: T[]
	// items: string[] | number[]
	onClick: (value: T) => void
	// onClick: (value: string | number) => void
}

export const List = <T extends { id: number }>({ items, onClick }: ListProps<T>) => {
	return (
		<div>
			<h2>List of items</h2>
			{
				items.map((item, index) => (
					<div key={item.id} onClick={() => onClick(item)}>{JSON.stringify(item, null, 2)}</div>
				))
			}
		</div>
	)
}
