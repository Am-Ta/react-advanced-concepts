/**
 * Higher-Order Components: Concretely, a higher-order component is a function that takes a component and returns a new component.
 * 
 * how can we reuse the code? the immediate thought is to lift the state to the parent component and pass down as a prop. this would definitely work in our scenario where we have the components as children of the same parent. but imagine a scenario where the components are scattered in the React component tree. lifting the state would definitely not be the current solution. so there is a need to share common functionality between components without repeating code and that is where the concept of Higher Order Component comes.
 * 
 * A pattern where a function takes a component as an argument and returns a new component.
 * 
 * const NewComponent = higherOrderComponent(OriginalComponent);
 * typically the hoc adds additional data or functionality to original component.
 * the NewComponent can alse be referred to as EnhancedComponent
 * const EnhancedComponent = higherOrderComponent(OriginalComponent);
 * the OriginalComponent is usually referred to as WrappedComponent 
 * const EnhancedComponent = higherOrderComponent(WrappedComponent);
 * 
 * let discuss two things: 1-passing down the props. common mistake that happens when you start with hoc, when we specify props on the component(for example ClickCounter), the props are sent down to the hoc and not to the component(ClickCounter). to fix this issue, you need to pass down the remaining props to the WrappedComponent using the spread operator. 2-passing parameter to the hoc function.
 * 
 * 
 */

 import React, { useState } from "react"

 export function withCounter(WrappedComponent, incrementNumber=1) {
     
    const EnhancedComponent =  (props) => {
        let [count, setCount] = useState(0)
        
        let incrementCounter = () => setCount((prevValue) => prevValue + incrementNumber)

        return <WrappedComponent count={count} incrementCounter={incrementCounter} {...props} />
     }
 
     return EnhancedComponent
 }
 