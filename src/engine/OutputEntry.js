import React, { Component } from 'react';

export class OutputEntry extends Component {

    render() {

        return <>

        <div className="entry">
            
            <div className="entry__timestamp">
                { this.props.timestamp }
            </div>

            <div className="entry__text">

            {   this.props.input &&

                <div className="entry__input">
                    { this.props.input }
                </div>
            }
                <div className="entry__output">
                    { this.props.output }
                </div>

            </div>
        
        </div>
        </>
    };
};

OutputEntry.defaultProps = {
    timestamp: "",
    input: "",
    output: "",
};