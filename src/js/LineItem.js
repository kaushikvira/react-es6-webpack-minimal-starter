/*eslint no-debugger:0,no-console: 0*/
'use strict';

import React, {Component, PropTypes} from 'react';

class LineItem extends Component {

    constructor(props) {
        super(props);
        this.state = {lineItemObject: props.lineItemObject};
    }

    render() {
        return <div>
            <span>{this.props.lineNumber}</span>
            <span><input type="number" value={this.state.lineItemObject.quantity} onChange={this.quantityChange.bind(this)}/>   </span>
            <span><input value={this.state.lineItemObject.desc} onChange={this.descChange.bind(this)}/>   </span>
            <span><input type="number" value={this.state.lineItemObject.price} onChange={this.priceChange.bind(this)}/>   </span>
            <span onClick={this.onDelete.bind(this)}>  Delete  </span>

        </div>
    }

    onDelete() {
        this.props.delete(this.state.lineItemObject);
    }

    quantityChange(event) {
        let object = this.state.lineItemObject;
        object.quantity = event.target.value;
        this.setState({lineItemObject: this.state.lineItemObject})
        this.props.updateTotal();
    }

    descChange(event) {
        let object = this.state.lineItemObject;
        object.desc = event.target.value;
        this.setState({lineItemObject: this.state.lineItemObject})
    }

    priceChange(event) {
        let object = this.state.lineItemObject;
        object.price = event.target.value;
        this.setState({lineItemObject: this.state.lineItemObject})
        this.props.updateTotal();
    }


}
LineItem.propTypes = {
    id: PropTypes.string.isRequired,
    lineNumber:PropTypes.number.isRequired,
    lineItemObject: PropTypes.object.isRequired,
    updateTotal: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired
};

export default LineItem;
