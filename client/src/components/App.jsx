import React , { Component } from 'react';
import List from './List';

export default class App extends Component {
    constructor() {
        super();
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <List />
            </div>
        )
    }
};