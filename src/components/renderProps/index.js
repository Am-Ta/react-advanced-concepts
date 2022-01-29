/**
 * Render Props: the term 'render prop' refers to a technique for sharing code between react components using a prop whose value is a function.
 */

import {useState} from "react"

export function Counter(props) {
    let [count, setCount] = useState(0)
        
    let incrementCounter = () => setCount((prevValue) => prevValue + 1)

    return props.render(count, incrementCounter)
}