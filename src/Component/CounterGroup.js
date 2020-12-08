import React, { Component } from 'react';
import CounterContainer from '../Container/CounterContainer';


export default class CounterGroup extends Component {

    initArraySize = (size) => {
        return Array.from(Array(size).keys())
    };

    calculateSum = (count) => { 
        let newSum = this.props.sum + count;
        this.props.updateSum(newSum);
    }

    render() {
        const size = this.props.size;
        const initArraySize = this.initArraySize(size);
        return (
            <div>
                {
                    initArraySize.map((values) =>
                        <CounterContainer key={values} iniCounter={this.props.size}/>
                    )
                }
            </div>
        );
    }
}