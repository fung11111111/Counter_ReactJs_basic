import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            number: 0
        }

    }

    onIncrease = () => {
        let increasedNum = this.state.number + 1;
        this.setState({ number: increasedNum });
        this.props.calculateSum(increasedNum);
    };

    onDecrease = () => {
        let decreasedNum = this.state.number - 1;
        this.setState({ number: decreasedNum });
        this.props.calculateSum(decreasedNum);
    };

    render() {
        return (
            <section>
                <input type="button" value="+" onClick={this.onIncrease}></input>
                <span>{this.state.number}</span>
                <input type="button" value="-" onClick={this.onDecrease}></input>
            </section>
        );
    }
}



