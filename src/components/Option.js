import React from "react"


const Option = (props) => {
    return (
        <li>
            {props.option} 
            <button onClick={(e) =>{
                props.handleDelete(props.option)
            }}>Delete</button>
        </li>
    )
}

export default Option