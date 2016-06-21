/*eslint no-debugger:0,no-console: 0*/
'use strict';

import React, {Component} from 'react';

class MyInput extends Component {

    constructor() {
        super();
        this.maxChar = 10;
        this.initText = "Hellllo";
        this.state = {tweet: this.initText, remaining: this.countRemaining(this.initText)};
    }

    render() {
        return <div>
            <input value={this.state.tweet} onChange={this.onChange.bind(this)}/>
            <div>Remaining {this.state.remaining}</div>
        </div>
    }

    onChange(event) {
        let value = event.target.value
        let remaining = this.countRemaining(value);
        if (remaining <= 0) {
            value = this.state.tweet;
        }
        this.setState({tweet: value, remaining: remaining})
    }

    countRemaining(value) {
        let remaining = this.maxChar - value.length;
        remaining < 0 ? 0 : remaining;

    }
}


export default MyInput;
