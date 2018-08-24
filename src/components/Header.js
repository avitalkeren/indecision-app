import React from "react"

const Header = (props) => {
    return (
        <div>
            <h1>{props.titel}</h1>
            {(props.subtitle) &&  <h2>{props.subtitle}</h2>}
        </div>
    )
}

Header.defaultProps = {
    titel: "Indecision"
}

export default Header