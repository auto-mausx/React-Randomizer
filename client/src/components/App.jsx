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


/*
Notes on how to get as random of a number (list item) as possible:

Use an API call to random.org with a range from 1 to the lists length

Get name from list whos index matches the random number from the API call

Use a prize wheel npm (or create your own) to insert random API number
  and insert it as the winning number
  - possible solutions:
      https://www.npmjs.com/package/timmattison-winwheel
      http://dougtesting.net/winwheel/docs/tut14_setting_the_prize
      http://dougtesting.net/winwheel/docs

*/