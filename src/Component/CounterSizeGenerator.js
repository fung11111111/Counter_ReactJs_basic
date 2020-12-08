import React, { Component } from 'react';

export default class CounterSizeGenerator extends Component {
   
    updateSize = (event) => {
        let number = event.target.value.length > 0 ? parseInt(event.target.value) : 0;
        this.props.updateCounterSize(number);
        this.props.reset();
    }

    render() {
        return (
            <div>
                <label>Size:</label>
                <input type="number" value={this.props.size} onChange={this.updateSize}></input>
            </div>
        );
    }
}