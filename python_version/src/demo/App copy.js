/* eslint-disable react/prop-types */
/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import { Graph } from '../lib';

class App extends Component {

    constructor() {
        super();
        this.state = {
            value: ''
        };
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {
        return (
            <div>
                <Graph
                    setProps={this.setProps}
                    {...this.state}
                >
                    {this.props.children}
                </Graph>
            </div>
        )
    }
}

export default App;
