/*eslint no-debugger:0,no-console: 0*/
'use strict';

import React, {Component,PropTypes} from 'react';

class TotalPrice extends Component {

    constructor() {
        super();
    }

    render() {
        return <div>
            {this.props.total}
        </div>
    }


}
TotalPrice.propTypes = {
    total: PropTypes.any.isRequired
};


export default TotalPrice;
