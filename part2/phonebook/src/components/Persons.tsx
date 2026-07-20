const Persons = ({toShow}: any) => {
    return (
        <div>
            <h2>Numbers</h2>
            <div>
                <ul>
                {toShow.map((person: any) => (<li key={person.id}>{person.name} {person.number}</li>))}
                </ul>
            </div>
        </div>
    )
}

export default Persons