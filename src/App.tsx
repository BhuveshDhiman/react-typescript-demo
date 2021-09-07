import React from 'react';
import { Greet } from "./components/Greet"
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Person } from "./components/Person"
import { PersonList } from "./components/PersonList"
import { Status } from "./components/Status"


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
			{/* <Greet name="Bhuvesh" messageCount={20} isLoggedIn={false} />
			<Person name={personName} />
			<PersonList names={nameList} /> */}
			{/* <Status status='success' /> */}
			{/* <Heading>Placeholder text</Heading> */}
			{/* <Oscar>
				<Heading>Oscar goes to Leonardo!</Heading>
			</Oscar> */}
			<Greet name="Bhuvesh" messageCount={0} isLoggedIn={true} />

		</div>
	);
}

export default App;
