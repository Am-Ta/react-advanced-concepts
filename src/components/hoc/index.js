/**
 * Higher-Order Components: Concretely, a higher-order component is a function that takes a component and returns a new component.
 * 
 * how can we reuse the code? the immediate thought is to lift the state to the parent component and pass down as a prop. this would definitely work in our scenario where we have the components as children of the same parent. but imagine a scenario where the components are scattered in the React component tree. lifting the state would definitely not be the current solution. so there is a need to share common functionality between components without repeating code and that is where the concept of Higher Order Component comes.
 * 
 */

import { useState } from "react"

export function ClickCounter() {
    let [count, setCount] = useState(0)

    let incrementCounter = () => setCount((prevValue) => prevValue + 1)

    return (
        <div>
            <button onClick={incrementCounter}>Click {count} times</button>
        </div>
    )
}

export function HoverCounter() {
    let [count, setCount] = useState(0)

    let incrementCounter = () => setCount((prevValue) => prevValue + 1)

    return (
        <h2 onMouseOver={incrementCounter}>Hover {count} times</h2>
    )
}