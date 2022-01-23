import { Fragment } from "react";
import { ClickCounter, HoverCounter } from ".";
import "../../App.css"

export default function App() {
    return (
        <div className="App">
            <ClickCounter />
            <HoverCounter />
        </div>
    )
}