import { useState } from 'react'

const Statistics = ({good, neutral, bad}) => {
  return (
    <div>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {good + neutral + bad}</p>
      <p>Average: {(good + neutral + bad) / 3}</p>
      <p>Positive: {((good) / (good + neutral + bad))*100.0}%</p>
    </div>
  )
}

const Button = props => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>Give feedback</h2>
      <Button onClick={() => setGood(good + 1)} text='Good'/>
      <Button onClick={() => setNeutral(neutral + 1)} text='Neutral'/>
      <Button onClick={() => setBad(bad + 1)} text='Bad'/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App