// const Hello = (props) => {
//   console.log(props)
//   return (
//     <div>
//         <p>Hello {props.name} you are {props.age}</p>
//     </div>
//   )
// }

// const App = () => {

//   const addage = 10
//   return (
//     <>
//       <h1>Greetings</h1>
//       <Hello name='Hassan' age={26}/>
//       <Hello name='ABC' age={30 + addage}/>
//       <Hello name='XYZ'/>
//     </>
//   )
// }

// export default App

const App = () => {
  const friends = [
    {name: 'Peter', age : 4},
    {name: 'Maya', age : 10},
  ]

  return (
    <div>
      <p>{friends[0].name}</p>
      <p>{friends[1].name}</p>
    </div>
  )
}

export default App
