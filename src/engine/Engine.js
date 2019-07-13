import React, { Component } from 'react';
import { UserInput } from "./UserInput";
import { Output } from "./Output";
import { Navigation } from "./Navigation";
import { UserMenu } from "./UserMenu";

import { trash } from "../history/trash";
import { gameObject } from "../history/trashFunctions";

/* ENGINE
    The engine's job is to receive the user input, send it to the parser along with the current context and receive back a new context object and the output of the action.
    The input and output data will be saved in the history log state and will be sent to the Output component to be displayed.
    As for the context, the engine merely holds the present contents and send it to the parser. The parser will do all the job of receiving a context and an action, then it will process the action in the context and will return back this new context object for further processing, along with the action's output.
    The engine is also responsible for 
*/

export default class Engine extends Component {

    constructor(props) {
        super(props);

        this.state = {
            outputLogs: [],
            context: {
                logsHistory: [],
                timePlayed: "11:23:45",
                status: []
            },
            sessionTimeStart: undefined,
            gameObject: undefined,
        };

        this.parser = (context) => trash(context) 
    };

    // some fake context for testing
    fakeContext = {
        logsHistory: [],
        timePlayed: "02:12:23",
        status: [
            {header:"Current Game", body: "Take the Trash"},
            {header: "Author", body: "João Ricardo"},
            {header: "Time Played", body: "02:23:45"},
        ]
    }

    updateLog = (entry, output) => {
        let newLog = {
            timestamp: this.state.context.timePlayed,
            input: entry,
            output: output
        },
            history = this.state.context.logsHistory,
            outputLog = this.state.outputLogs;
        history.push(newLog);
        outputLog.push(newLog);
        this.setState({
            ...this.state,
            outputLogs: outputLog,
            context: {
                ...this.state.context,
                logsHistory: history
            }
        });
    };

    updateContext = (newContext) => {
        this.setState({
            ...this.state,
            context: newContext
        });
    };

    clearLog = () => {
        this.setState({
            ...this.state,
            outputLogs: []
        });
    };

    parseData = (entry) => {
        let [context, output] = this.parser(entry)
        this.updateLog(entry, output);
        this.updateContext(context);
    };

    setSessionCounter = () => {
        let startingTime = new Date();
        this.setState({
            ...this.state,
            sessionTimeStart: startingTime
        });
        setTimeout(() => {
            console.log(this.state)
        }, 2000);
    };

    startComponent = (newContext) => {
        let startingTime = new Date();
        let newGameObject = gameObject;
        this.setState({
            ...this.state,
            context: newContext,
            sessionTimeStart: startingTime,
            gameObject: newGameObject
        });
        console.log(this.state)
    };

    componentDidMount = () => {
        this.startComponent(this.fakeContext);
    };

    render = () =>

        <div className="container">

            <Navigation/>

            <div className="main-area">

                <UserMenu status={ this.state.context.status }/>

                <Output log={ this.state.outputLogs } clearLog={ this.clearLog }/>

            </div>

            <UserInput submitCallback={ this.parseData }/>

        </div>
};