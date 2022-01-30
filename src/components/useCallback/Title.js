import { memo } from "react"

// Title Component
function Title() {
    console.log("Rendering Title")
    return <h2>useCallback Hook</h2>
}

export default memo(Title);