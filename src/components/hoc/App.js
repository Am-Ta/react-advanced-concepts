import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";
import "../../App.css"

export default function App() {
    return (
        <div className="App">
            <ClickCounter name={"amin taghipour"} />
            <HoverCounter />
        </div>
    )
}