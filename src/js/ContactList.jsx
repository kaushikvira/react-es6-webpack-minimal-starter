/*eslint no-debugger:0,no-console: 0*/

'use strict';

import React, {Component, PropTypes} from 'react';
import Contact from './Contact';


class ContactList extends Component {

    constructor() {
        super();
        this.state = {results: []};
        fetch('http://localhost:8060/api/contacts', {
            method: 'get'
        }).then((response) => {
            response.json().then((data) => {
                this.setState({results: data})
            })
        }).catch(function() {
            // Error :(
        });
    }

    render() {
        {
            return <div>
                {
                    this.state.results.map(function(contect) {
                        return <Contact key={contect.id} firstName={contect.firstName} lastName={contect.lastName} city="Fremont, CA."/>
                    })}
            </div>
        }
    }

    componentWillMount() {
        console.log("ContactList componentWillMount");
    }

    componentDidMount() {
        console.log("ContactList componentDidMount ");
    }
}

ContactList.propTypes = {
    children: PropTypes.any
};

export default ContactList;
