import Part from "./Part"

const Content = ({parts} : any) => {
    return (
        <div>
            <ul>
                {parts.map((part : any, i : any) => <Part key={i} cpart={part}/>)}
            </ul>
        </div>
    )
}

export default Content