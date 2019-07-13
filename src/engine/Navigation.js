import React, { Component } from 'react';

export class Navigation extends Component {

    render = () => <>

        <nav className="navigation">

            <div className="navigation__logo">IFEngine</div>

            <div className="navigation__items">
                <div className="navigation__link">Menu</div>
                <div className="navigation__link">Help</div>
                <div className="navigation__link">About</div>
            </div>

        </nav>
    </>
};