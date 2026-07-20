const Total = ({parts} : any) => {

    const sum = parts.reduce((sum : any, part: any) => sum + part.exercises, 0);

    return (
        <div>
            <p>Total of {sum} exercises</p>
        </div>
    )
}

export default Total