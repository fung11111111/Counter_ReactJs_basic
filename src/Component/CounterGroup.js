import React, { Component } from 'react';
import Counter from './Counter'

export default class CounterGroup extends Component {
  
    initArraySize = (size) => {
        return Array.from(Array(size).keys())
    };

    calculateSum = (count) => { 
        let newSum = this.props.sum + count;
        console.log(newSum);
        this.props.updateSum(newSum);
    }

    render() {
        const size = this.props.size;
        const initArraySize = this.initArraySize(size);
        return (
            <div>
                {
                    initArraySize.map((values) =>
                        <Counter key={values} calculateSum={this.calculateSum} />
                    )
                }
            </div>
        );
    }
}