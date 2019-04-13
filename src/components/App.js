import React, { Fragment } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Drawer from './Drawer';
import axios from 'axios';


class App extends React.Component {

    state = {
        process: {},
        steps: []
    }

    componentDidMount = () => {
        return axios.get('/data/process.json')
            .then(res => res.data)
            .then(process => this.setState({ process }))
            .then(() => axios.get('/data/steps.json'))
            .then(res => res.data)
            .then(steps => this.setState({ steps }))
    }
    
    render() {
        const { process, steps } = this.state;
        return (
            <Router>
                <Fragment>
                    <Route path='/:stepNum?' render={({ match }) => <Drawer stepNum={match.params.stepNum} process={process} steps={steps} />} />
                </Fragment>
            </Router>
        )
    }
}


export default App;