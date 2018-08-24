
import React, { Component } from "react"
import Option from "./Option"

class Options extends Component {


    render() {
        return (
            <div>
                <button onClick={this.props.habdleDeleteAll}>Delete All</button>
                <p>{this.props.options.length ? "your options:" : "Enter some options"}</p>
                <ol>
                    {this.props.options.map((option) => 
                        <Option key={option} option={option} handleDelete={this.props.handleDelete} />)}
                </ol>
            </div>
        )
    }
}

export default Options
