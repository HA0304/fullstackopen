import { useState } from 'react'

const StatisticLine = (props) => {
  return (
    <div>
      <p>{props.text}: {props.value}</p>
    </div>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if (good + neutral + bad < 1)
  {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  else
  {
    const all = good + neutral + bad
    return (
    <div>
      <h2>Statistics</h2>
      <StatisticLine text={'Good'} value={good}/>
      <StatisticLine text={'Neutral'} value={neutral}/>
      <StatisticLine text={'Bad'} value={bad}/>
      <StatisticLine text={'All'} value={all}/>
      <StatisticLine text={'Average'} value={all / 3}/>
      <StatisticLine text={'Positive'} value={(good / all) * 100 + '%'}/>
    </div>
    )
  }
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