import React, { Component } from 'react';
import { OutputEntry } from "./OutputEntry";

export class Output extends Component {

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    };

    componentDidMount() {
        this.scrollToBottom();
    };

    componentDidUpdate() {
        this.scrollToBottom();
    };

    render() {

        const entries = this.props.log;

        return <>
        <div className="output">
            <button className="output__clear"
                onClick={ this.props.clearLog }>
                &nbsp;
            </button>
        {
            entries.map( (e) =>
                <OutputEntry timestamp={ e.timestamp }
                    input={ e.input }
                    output={ e.output }/>
            )
        }
            <div className="output__dummy"
                ref={ (el) => { this.messagesEnd = el; } }>
                &nbsp;
            </div>
        </div>
        </>
    };
};