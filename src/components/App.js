import React, { Component, Fragment } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';


class App extends Component {

    state = {
        process: {},
        steps: []
    }
    
    render() {
        return (
            <Router>
                <hr/>
            </Router>
        )
    }
}


export default App;