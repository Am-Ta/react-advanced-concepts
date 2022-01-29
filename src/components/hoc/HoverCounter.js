import { withCounter } from "."


const HoverCounter = ({count, incrementCounter, ...props}) => {

    return (
        <h2 onMouseOver={incrementCounter}>{props.name} Hover {count} times</h2>
    )
}

export default withCounter(HoverCounter)