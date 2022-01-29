import { withCounter } from "."

const  ClickCounter = ({count, incrementCounter, ...props}) => {
    
    return (
        <div>
            <button onClick={incrementCounter}>{props.name} Click {count} times</button>
        </div>
    )
}

export default withCounter(ClickCounter, 4)