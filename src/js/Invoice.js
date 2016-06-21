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
            lineItems: [this.createDefaultObejct()]
            , total: 0
        }
        this.updateTotal = this.updateTotal.bind(this);
        this.removeLineItem = this.removeLineItem.bind(this);
    }

    guid() {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
    }

    s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    render() {


        return <div>
            <div>

                <div>Header</div>
            </div>
            <div>
                {this.state.lineItems.map((lineItemObject,index) => {
                    return <LineItem key={lineItemObject.id} id={lineItemObject.id} lineNumber={index+1} lineItemObject={lineItemObject} updateTotal={this.updateTotal} delete={this.removeLineItem}> </LineItem>
                })}
            </div>
            <div><span onClick={this.addLineItem.bind(this)}>Add</span></div>
            <div>
                <TotalPrice total={this.state.total}/>
            </div>
        </div>
    }

    updateTotal() {
        this.setState({total: this.total()});
    }

    total() {
        let total = 0;
        for (var {price: price, quantity:quantity}  of this.state.lineItems) {
            total = total + (price * quantity);
        }
        return total;
    }

    addLineItem() {
        let object = this.createDefaultObejct();
        this.state.lineItems.push(object);
        this.setState({lineItems: this.state.lineItems, total: this.total()});
        console.log(this.state.lineItems)
    }

    createDefaultObejct() {
        let object = Object.create(this.defaultLineItem);
        object.id = this.guid();
        return object;
    }

    removeLineItem(item) {
        var index = this.state.lineItems.indexOf(item);
        this.state.lineItems.splice(index, 1)
        this.setState({lineItems: this.state.lineItems, total: this.total()});

    }
}


export default Invoice;
