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
	const parts = [
		{
			name: 'Fundementals of React',
			exercises: 10
		},
		{
		name: 'Using props to pass data',
		exercises: 7
		},
		{
		name: 'State of a component',
		exercises: 14
		}
	]
	return (
		<div>
			<Course title={course}/>
			<Part title={parts[0].name} exercise={parts[0].exercises}/>
			<Part title={parts[1].name} exercise={parts[1].exercises}/>
			<Part title={parts[2].name} exercise={parts[2].exercises}/>
		</div>
	)
}

export default App