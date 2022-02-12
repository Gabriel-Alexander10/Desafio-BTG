/* eslint-disable react/prop-types */
/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import Home from '../lib/components/Home.react';
import Graph from '../lib/components/Graph.react';

class App extends Component {

    constructor() {
        super();
        this.state = {
            width: 500,
            isOpen: false
        }
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {
        return (
            <Home
                setProps={this.setProps}
                {...this.state}
            >
                {this.props.children}

                <Graph
                    setProps={this.setProps}
                    {...this.state}
                >
                    
                </Graph>
            </Home>
        )
    }
}

export default App;
