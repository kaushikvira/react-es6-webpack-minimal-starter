/*eslint no-debugger:0,no-console: 0*/
'use strict';

import React, {Component, PropTypes} from 'react';

class MyInput extends Component {

    constructor() {
        super();
        this.maxChar = 10;
        this.initText = "Hellllo";
        this.state = {tweet: this.initText, remaining: this.countRemaining(this.initText)};
        this.onChange = this.onChange.bind(this);
        this.send =this.send.bind(this);
    }

    render() {
        return <div>
            <input value={this.state.tweet} onChange={this.onChange}/>
            <div>Remaining {this.state.remaining}</div>
            <button onClick={this.send}>Send</button>
        </div>
    }

    onChange(event) {
        let value = event.target.value
        let remaining = this.countRemaining(value);
        if (remaining <= 0) {
            return;
        }
        this.setState({tweet: value, remaining: remaining})
    }

    countRemaining(value) {
        let remaining = this.maxChar - value.length;
        return remaining <= 0 ? 0 : remaining;

    }

    send() {
        console.log(this.state.tweet)
        this.props.send(this.state.tweet);
    }
}

MyInput.propTypes = {
    send: PropTypes.func.isRequired
};
export default MyInput;
