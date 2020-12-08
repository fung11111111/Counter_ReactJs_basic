import React, { Component } from 'react';
import Counter from './Counter'

export default class CounterGroup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            restCounter: 0
        };

    }

    initArraySize = (size) => {
        return Array.from(Array(size).keys())
    };

    calculateSum = (count) => { 
        let newSum = this.props.sum + count;
        this.props.updateSum(newSum);
    }

    isReseted = (restCounter) => {
        this.setState({restCounter: restCounter});
    }

    //clear count value when size changed
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
                        <Counter key={values} calculateSum={this.calculateSum} size={this.props.size}/>
                    )
                }
            </div>
        );
    }
}