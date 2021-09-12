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
			<User />

		</div>
	);
}

export default App;

