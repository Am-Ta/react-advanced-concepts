import { useState } from "react"


const HoverCounter = ({count, incrementCounter, ...props}) => {
    return (
        <h2 onMouseOver={incrementCounter}>Hover {count} times</h2>
    )
}

export default HoverCounter