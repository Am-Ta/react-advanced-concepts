/**
 * useMemo Hook: In real world applications thought, you will sometimes come across logic that take considerable amount of time for execution. what we need is a way to tell React not to recalculate certain values when unnecessary especially the ones which take a long time to compute. useMemo is a hook that will only recompute the cached value when one of dependencies has changed. ***this optimization to avoid expensive calculation on every render.*** 
 * 
 * at the first argument we pass in, the function whose return value needs to be cached.
 * 
 * what is difference between useCallback and useMemo? useCallback caches the provided function instance itself whereas useMemo invokes the provided function and caches its result. so if you need to cache a function, useCallback  and when you need to cache the result of an invoke function, useMemo.
 * 
 */

import { Fragment, useMemo, useState } from "react";

export function Counter() {
    let [counterOne, setCounterOne] = useState(0)
    let [counterTwo, setCounterTwo] = useState(0)

    let incrementOne = () => setCounterOne(prevValue => prevValue + 1);
    let incrementTwo = () => setCounterTwo(prevValue => prevValue + 1);

    let isEven = useMemo(() => {
        let i = 0
        while(i < 2000000000) i++

        return counterOne % 2 === 0
    }, [counterOne])


    return <Fragment>
        <div>
            <button onClick={incrementOne}>Count One - {counterOne}</button>
            <span>{isEven ? " Even" : " Odd"}</span>
        </div>
        <div style={{marginTop: "1em"}}>
            <button onClick={incrementTwo}>Count One - {counterTwo}</button>
        </div>
    </Fragment>
}

