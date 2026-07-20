import { useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
  const [id, setid] = useState(1)
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '0333-3338888', id: 1},
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [showFilter, setShowFilter] = useState('')

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
      number: newNum
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

  const handleNewFilter = (event: any) => {
    console.log(event.target.value)
    if (showFilter === '')
    {
      setShowAll(() => true)
    }
    else
    {
      setShowAll(() => false)
    }
    setShowFilter(event.target.value)
  }

  const toShow = showAll ? persons : persons.filter(person => person.name.startsWith(showFilter))

  return (
    <div>
      <PersonForm addPerson={addPerson} newName={newName} handleNewChange={handleNewChange} newNum={newNum} handleNewNum={handleNewNum}/>
      <Filter showFilter={showFilter} handleNewFilter={handleNewFilter}/>
      <Persons toShow={toShow}/>
    </div>
  )
}

export default App