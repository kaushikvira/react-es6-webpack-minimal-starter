/*eslint no-debugger: "off"*/
'use strict';

import React, {Component, PropTypes} from 'react';

class Hello extends Component {

    render() {
        return <p onClick={this.handleClick}> Hello, world! {this.props.message}</p>;
    }

    handleClick(e) {
        debugger;
        alert("hellllo " + e);
    }


}
Hello.propTypes = {
    message: PropTypes.string.isRequired
};

export default Hello;
