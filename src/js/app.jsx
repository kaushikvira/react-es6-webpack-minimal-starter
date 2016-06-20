import React from 'react';
import ReactDOM from 'react-dom';
import Contact from './Contact';
import Hello from './Hello';


ReactDOM.render((
    <div>
        <Contact firstName="kaushik" lastName="Vira" city="Fremont, CA."/>
        <Hello message="Hellllo"/>
        </div>
    ),
    document.getElementById('example')
);
