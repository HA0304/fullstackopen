const Part = props => {
	return (
		<div>
			<p>{props.title} {props.exercise}</p>
		</div>
	)
}

const Course = props => {
	return (
		<div>
			<p>{props.title}</p>
		</div>
	)
}

const App = () => {
	const course = 'Half Stack application development'
	const part1 = {
		name: 'Fundementals of React',
		exercises: 10
	}
	const part2 = {
		name: 'Using props to pass data',
		exercises: 10
	}
	const part3 = {
		name: 'State of a component',
		exercises: 10
	}
	return (
		<div>
			<Course title={course}/>
			<Part title={part1['name']} exercise={part1['exercises']}/>
			<Part title={part2['name']} exercise={part2['exercises']}/>
			<Part title={part3['name']} exercise={part3['exercises']}/>
		</div>
	)
}

export default App