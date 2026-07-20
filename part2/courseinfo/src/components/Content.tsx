import Part from "./Part"

const Content = ({parts} : any) => {
    return (
        <div>
            <ul>
                {parts.map((part : any) => <Part key={part.id} cpart={part}/>)}
            </ul>
        </div>
    )
}

export default Content