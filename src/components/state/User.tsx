import React, { useState } from 'react'

type AuthUser = {
	name: string
	email: string
}

export const User = () => {
	const [user, setUser] = useState<AuthUser>({} as AuthUser)
	console.log({ user })
	const handleLogin = () => {
		setUser({
			name: "Bhuvesh",
			email: "b@gmail.com"
		})
	}
	// const handleLogout = () => {
	// 	setUser(null)
	// }
	return (
		<div>
			<button onClick={handleLogin}>Login</button>
			{/* <button onClick={handleLogout}>Logout</button> */}
			<p>User name is {user.name}</p>
			<p>User email is {user.email}</p>
		</div>
	)
}
