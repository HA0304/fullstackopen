const PersonForm = ({addPerson, newName, handleNewChange, newNum, handleNewNum} : any) => {
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
        </div>
    )
}

export default PersonForm