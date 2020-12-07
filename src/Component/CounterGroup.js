import React, { Component } from 'react';
import Counter from './Counter'

export default class CounterGroup extends Component {
    initArraySize = (size) => {
        return Array.from(Array(size).keys())
    };

    render(){
        const size = this.props.size;
        const initArraySize = this.initArraySize(size);
        return (
            <div>
                {
                    initArraySize.map((values) =>
                        <Counter key={values}/>
                    )
                }
            </div>

        );
    }
}