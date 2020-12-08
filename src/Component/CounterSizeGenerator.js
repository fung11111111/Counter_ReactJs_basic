import React, { Component } from 'react';

export default class CounterSizeGenerator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            size: 0
        };

    }

    updateSize = (event) => {
        let number = event.target.value.length > 0 ? parseInt(event.target.value) : 0;
        this.setState({ size: number });
        this.props.updateCounterSize(number);
        this.props.resetSum(0);
    }

    render() {
        return (
            <div>
                <label>Size:</label>
                <input type="number" value={this.state.size} onChange={this.updateSize}></input>
            </div>
        );
    }
}