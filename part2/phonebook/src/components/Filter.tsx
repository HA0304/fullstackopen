const Filter = ({showFilter, handleNewFilter} : any) => {
    return (
        <form>
        <div>
          filter: <input value={showFilter} onChange={handleNewFilter}/>
        </div>
      </form>
    )
}

export default Filter