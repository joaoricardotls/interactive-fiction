import React, { Component } from 'react';

export class MenuStatus extends Component {

    render = () => <>

        <div className="status">
            <div className="status__header">
                { this.props.header }
            </div>
            <div className="status__body">
                { this.props.body }
            </div>
        </div>
    </>
}