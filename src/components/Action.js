import React from "react"


const Action = (props) => {
    return (
        <div>
            <button onClick={props.handelDoSomething}>What should I do?</button>
        </div>
    )
}

export default Action