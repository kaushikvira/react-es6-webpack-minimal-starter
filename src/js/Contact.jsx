/*eslint no-debugger:0,no-console: 0*/
'use strict';

import React, {Component, PropTypes} from 'react';

class Contact extends Component {
    constructor() {
        super();
        this.state = {expanded: true};
    }

    render() {
        console.log("Rendering");

        return <div onClick={this.handleClick.bind(this)}>
            {this.state.expanded ? "V  " : ">  "}My name is {this.props.firstName} {this.props.lastName}
            {this.state.expanded ? <div>I live in {this.props.city}</div> : <div></div>}
        </div>;
    }

    handleClick() {
        if (this.state.expanded) {
            this.setState({expanded: false})
        } else {
            this.setState({expanded: true})
        }
    }
}
Contact.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired
};

export default Contact;
