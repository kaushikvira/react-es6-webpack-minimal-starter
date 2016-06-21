/*eslint no-debugger:0,no-console: 0*/

'use strict';

import React, {Component} from 'react';
import LineItem from './LineItem';
import TotalPrice from './TotalPrice'


class Invoice extends Component {

    constructor() {
        super();

        this.defaultLineItem = {
            quantity: 1,
            desc: "Default Desc",
            price: 1.00
        }
        this.state = {
            lineItems: []
            , total: 0
        }
        this.updateTotal = this.updateTotal.bind(this);
    }

    render() {

        var updateTotal = this.updateTotal;

        return <div>
            <div>
                <div>
                    <span onClick={this.addLineItem.bind(this)}>Add</span><span onClick={this.removeLineItem.bind(this)}>Remove</span>
                </div>
                <div>Header</div>
            </div>


            <div>
                {this.state.lineItems.map(function(lineItemObject, index) {

                    return <LineItem key={index} lineItemObject={lineItemObject} updateTotal={updateTotal}>  </LineItem>
                })}
            </div>
            <div>
                <TotalPrice total={this.state.total}/>
            </div>
        </div>
    }

    updateTotal(){
      this.setState({total:this.total()});
    }
    total() {
        let total = 0;
        for (var {price: price, quantity:quantity}  of this.state.lineItems) {
            total = total + (price * quantity);
        }
        return total;
    }

    addLineItem() {
        this.state.lineItems.push(Object.create(this.defaultLineItem));
        this.setState({lineItems: this.state.lineItems, total: this.total()});
        console.log(this.state.lineItems)


    }

    removeLineItem() {
        this.state.lineItems.pop();
        this.setState({lineItems: this.state.lineItems, total: this.total()});
        console.log(this.state.lineItems)
    }
}


export default Invoice;
