import React , { Component } from 'react';

class AddOption extends Component{
    constructor(props) {
        super(props);
        
        this.state = {
            error: ""
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    
    handleSubmit(e){
        e.preventDefault()

        const selected = e.target.elements.option.value;

        const error = this.props.handelAddOption(selected)

        this.setState(() => { return { error: error }; });

        if (!error){
             e.target.elements.option.value = "";
        }
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="option" ></input>
                <button>Add Option</button>
                {(this.state.error) && <p>{this.state.error}</p>}
            </form>
        )
    } 
}

export default AddOption