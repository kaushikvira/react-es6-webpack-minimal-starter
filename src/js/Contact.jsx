/*eslint no-debugger:0,no-console: 0*/
'use strict';

import React, {Component, PropTypes} from 'react';

class Contact extends Component {
    constructor() {
        super();
        this.state = {isExpanded: true};
    }

    render() {
        console.log("Run Render again..")
        return <div onClick={this.handleClick.bind(this)}>
            {this.state.isExpanded ? "  V  " : ">  "}My name is {this.props.firstName} {this.props.lastName}
            {this.state.isExpanded ? <div>I live in {this.props.city}</div> : ""}
        </div>;
    }

    handleClick() {
        this.setState({isExpanded: !this.state.isExpanded})
    }

    componentWillMount() {
        console.log("Contact componentWillMount");
    }

    componentDidMount() {
        console.log("Contact componentDidMount ");
    }
}
Contact.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired
};

export default Contact;
