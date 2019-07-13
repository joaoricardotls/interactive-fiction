import React, { Component } from 'react';
import { ReactComponent as GameIcon } from "../style/icons/game.svg";
import { ReactComponent as ConfigIcon } from "../style/icons/config.svg";
import { ReactComponent as MapIcon } from "../style/icons/map.svg";
import { ReactComponent as StatsIcon } from "../style/icons/stats.svg";
import { MenuStatus } from "./MenuStatus"

export class UserMenu extends Component {

    render = () => <>

        <div className="menu">

        <div className="menu__box">

            <div className="menu__button">
                GAME
                <GameIcon className="menu__icon"/>
            </div>

            <div className="menu__button">
                SETTINGS
                <ConfigIcon className="menu__icon"/>
            </div>

            <div className="menu__button">
                MAP
                <MapIcon className="menu__icon"/>
            </div>
            
            <div className="menu__button">
                STATS
                <StatsIcon className="menu__icon"/>
            </div>

        </div>
        {
            this.props.status &&
            this.props.status.map( (stat) =>
                <MenuStatus header={ stat.header } body={ stat.body }/>
            )
        }
        </div>
    </>
};