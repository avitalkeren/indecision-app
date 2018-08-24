import React, { Component } from 'react';
import AddOption from "./AddOption"
import Options from "./Options"
import Header from "./Header"
import Action from "./Action"


class IndecisionApp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            options: []
        }
        this.habdleDeleteAll = this.habdleDeleteAll.bind(this);
        this.handelDoSomething = this.handelDoSomething.bind(this);
        this.handelAddOption = this.handelAddOption.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

    }
    habdleDeleteAll(){
        this.setState(() => {return {options : [] }});
    }
    handelDoSomething () {
        const num = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[num]);
    }
    handleDelete(optionToRemove) {
        this.setState((prevState) => {
            return  {options : prevState.options.filter((option)=>(option !== optionToRemove))}
        });
    }

    handelAddOption(option) {

        if(!option){
            return "option can not be empty"
        }
        if (this.state.options.indexOf(option) >= 0){
             return "option already exists";
        }

        this.setState((prevState) => {
            return {options: prevState.options.concat(option)};
        });

        return "";
    }
    render() {
        return (
            <div>
                <Header titel="Indecision" subtitle="do stuff" />
                <Action handelDoSomething={this.handelDoSomething}/>
                <Options options={this.state.options} 
                habdleDeleteAll={this.habdleDeleteAll} 
                handleDelete={this.handleDelete} />
                <AddOption handelAddOption={this.handelAddOption} />
            </div>
        )
    }
}

export default IndecisionApp;