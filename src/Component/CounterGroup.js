import React, { Component } from 'react';
import CounterContainer from '../Container/CounterContainer';
import Counter from './Counter'

export default class CounterGroup extends Component {
    constructor(props) {
        super(props);

    }

    initArraySize = (size) => {
        return Array.from(Array(size).keys())
    };

    calculateSum = (count) => { 
        let newSum = this.props.sum + count;
        this.props.updateSum(newSum);
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.size !== this.props.size){
           this.props.updateSum(0);
        }
    }

    render() {
        const size = this.props.size;
        const initArraySize = this.initArraySize(size);
        return (
            <div>
                {
                    initArraySize.map((values) =>
                        <CounterContainer key={values}/>
                    )
                }
            </div>
        );
    }
}