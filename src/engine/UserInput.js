import React, { Component } from 'react';
import { parse } from 'url';

export class UserInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userInput: ""
        };
    };
    
    updateUserInput = (e) => {
        this.setState({
            userInput: e.target.value
        });
    }

    clearInput = () => this.setState({
        userInput: ""
    })

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.submitCallback(this.state.userInput);
        this.clearInput();
    }

    render() {

        return <>
            <div className="input">

                <form className="form">

                    <input type="text" className="form__input"
                        onChange={ (e) => this.updateUserInput(e) } value={ this.state.userInput }/>

                    <button className="form__button"
                        onClick={ (e) => this.handleSubmit(e) }>
                        Enter
                    </button>
            
                </form>
            
            </div>
        </>
    };
};