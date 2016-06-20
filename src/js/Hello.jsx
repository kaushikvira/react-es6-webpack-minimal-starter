/*eslint no-debugger: "off"*/
'use strict';

import React, {Component, PropTypes} from 'react';

class Hello extends Component {

    constructor() {
        super();
        this.state = {counter: 1};
    }

    render() {
        return <p onClick={this.handleClick.bind(this)}> Hello, world! {this.state.counter}</p>;
    }

    handleClick() {
        this.setState({counter: this.state.counter + 1})
    }
}

Hello.propTypes = {
    message: PropTypes.string.isRequired
};

export default Hello;
