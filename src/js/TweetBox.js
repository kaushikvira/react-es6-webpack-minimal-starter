/*eslint no-debugger:0,no-console: 0*/
'use strict';

import React, {Component} from 'react';
import MyInput from './MyInput.js';


class TweetBox extends Component {

    constructor() {
        super();
    }

    render() {
        return <div>
            <MyInput send={this.send.bind(this)}/>
        </div>
    }

    send(tweet) {
        if (tweet != undefined && tweet.length === 0) {
            console.log("We need message to Send");
        } else {
            console.log(tweet);
        }
    }
}


export default TweetBox;
