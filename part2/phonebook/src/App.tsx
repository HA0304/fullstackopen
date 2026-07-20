import { useState } from 'react'

const App = () => {
  const [id, setid] = useState(1)
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 2 , num: '0333-3338888'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')

  const addPerson = (event : any) => {
    event.preventDefault()
    if (persons.some(person => person.name.toLowerCase() === newName.trim().toLowerCase())
)
    {
      alert(newName+' is already in phonebook')
      return
    }
    else
    {
      const nameobj = {
      name: newName,
      id: id,
      num: newNum
    }
    setid(id + 1)
    setPersons(persons.concat(nameobj))
    setNewName('')
    }
  }

  const handleNewChange = (event: any) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNewNum = (event: any) => {
    console.log(event.target.value)
    setNewNum(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNewChange}/>
          phone: <input value={newNum} onChange={handleNewNum}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        <ul>
          {persons.map((person) => (<li key={person.id}>{person.name} {person.num}</li>))}
        </ul>
      </div>
    </div>
  )
}

export default App