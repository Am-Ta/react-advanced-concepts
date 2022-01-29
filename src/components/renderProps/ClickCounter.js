import { useState } from "react"

const  ClickCounter = ({count, incrementCounter, ...props}) => {
    return (
        <div>
            <button onClick={incrementCounter}>Click {count} times</button>
        </div>
    )
}

export default ClickCounter