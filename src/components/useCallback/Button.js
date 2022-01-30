import { memo } from "react";

// Button Component
function Button({handleClick, children}) {
    console.log(`Rendering button - ${children}`);
    return <button onClick={handleClick}>
        {children}
    </button>
}

export default memo(Button);