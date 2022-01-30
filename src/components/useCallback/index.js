/**
 * Performance Optimization
 * useCallback Hook: useCallback is a hook that will return a memoized version of the callback function that only changes if one of the dependencies has changed.
 * why need to use useCallback? It is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.
 * 
 * React.memo: a hoc that will prevent a functional component from being rerender if it's props or state do not change. the memo has nothing to do with hooks.
 * 
 * why re-render the Button of salary while I click on the Button of age or vice versa?(I'm using React.memo) This is because a new increment salary function is created each time the parent component re-renders and when dealing with functions we always have to consider ***reference equality***, even though two functions have the exact same behavior, it does not mean they are equal to each other. so the function before the re-render is different to the function after the rerender. and since the function is a prop, React.memo sees that the prop has changed and will not prevent the re-render. 
 */

import { useState, useCallback } from "react"
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

export function Container() {
    let [age, setAge] = useState(25);
    let [salary, setSalary] = useState(50000);

    let incrementAge = useCallback(() => setAge((prevAge) => prevAge + 1), [age]);
    let incrementSalary = useCallback(() => setSalary((prevSalary) => prevSalary + 1000), [salary]);

    return <div>
        <Title />
        <Count text={"Age"} count={age} />
        <Button handleClick={incrementAge}>Increment Age</Button>
        <Count text={"Salary"} count={salary} />
        <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
}
