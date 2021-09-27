import React from 'react';
import { Greet } from "./components/Greet"
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Person } from "./components/Person"
import { PersonList } from "./components/PersonList"
import { Status } from "./components/Status"
import { Button } from "./components/Button"
import { Input } from './components/Input';
import { Container } from './components/Container';
import { LoggedIn } from "./components/state/LoggedIn"
import { User } from "./components/state/User"
import { Counter } from "./components/state/Counter"
import { ThemeContextProvider } from './components/context/ThemeContext'
import { Box } from './components/context/Box'
import { Private } from './components/auth/Private'
import { Profile } from './components/auth/Profile'
import { List } from './components/generics/List'
import { RandomNumber } from './components/restriction/RandomNumber'
import { Toast } from "./components/templateliterals/Toast"
import { CustomButton } from "./components/html/Button"
import { CustomInput } from "./components/html/Input"


function App() {
	const personName = {
		first: "Bhuvesh",
		last: "Dhiman"
	}

	const nameList = [
		{
			first: "Bhuvesh", last: "Dhiman"
		},
		{
			first: "Jeff", last: "Bezos"
		},
		{
			first: "Elon", last: "Musk"
		}
	]

	return (
		<div className="App">
			{/* <Greet name="Bhuvesh" messageCount={20} isLoggedIn={false} /> */}
			{/* <Person name={personName} /> */}
			{/* <PersonList names={nameList} /> */}
			{/* <Status status='success' /> */}
			{/* <Heading>Placeholder text</Heading> */}
			{/* <Oscar>
				<Heading>Oscar goes to Leonardo!</Heading>
			</Oscar> */}
			{/* <Greet name="Bhuvesh" messageCount={0} isLoggedIn={true} /> */}
			{/* <Button handleClick={(event, id) => console.log("Button clicked", event, id)} /> */}
			{/* <Input value='' handleChange={(e) => console.log(e)} /> */}
			{/* <Container styles={{ border: '1px solid black', padding: '1rem', }} /> */}
			{/* <LoggedIn /> */}
			{/* <User /> */}
			{/* <Counter /> */}
			{/* <ThemeContextProvider >
				<Box />
			</ThemeContextProvider> */}
			{/* <Private isLoggedIn={true} component={Profile} /> */}
			{/* <List items={['Red', 'Green', 'Blue']} onClick={(item) => console.log(item)} /> */}
			{/* <List items={[1, 22, 333]} onClick={(item) => console.log(item)} /> */}
			{/* <List items={[
				{
					id: 1,
					first: "Bhuvesh", last: "Dhiman"
				},
				{
					id: 2,
					first: "John", last: "Doe"
				}
			]} onClick={(item) => console.log(item)} /> */}
			{/* <RandomNumber value={10} isPositive /> */}
			{/* <Toast position='center' /> */}
			<CustomButton variant='primary' onClick={() => console.log("clicked")} >
				Primary button
			</CustomButton>
			<CustomInput onChange={(e) => console.log(e.target.value)} />
		</div>
	);
}

export default App;

