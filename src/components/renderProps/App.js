import { Counter } from "."
import "../../App.css"

import ClickCounter from "./ClickCounter"
import HoverCounter from "./HoverCounter"

export default function App() {
    return (
        <div className="App">
            <Counter render={(count, incrementCounter) => <ClickCounter count={count} incrementCounter={incrementCounter} />} />
            <Counter render={(count, incrementCounter) => <HoverCounter count={count} incrementCounter={incrementCounter} />} />

            
            {/* <ClickCounter />
            <HoverCounter /> */}
        </div>
    )
}