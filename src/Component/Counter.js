import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(props){
        super(props);

        this.state = {
            number: 0
        }
    }
    onIncrease = () => {
        this.setState((prestate) => ({ number: prestate.number + 1}));
    };

    onDecrease = () => {
        this.setState((prestate) => ({ number: prestate.number - 1}));
    };

    

    render(){
        return (
            <section>
                <input type = "button" value = "+" onClick = {this.onIncrease}></input>
                <span>{this.state.number}</span>
                <input type = "button" value = "-"  onClick = {this.onDecrease}></input>

            </section>
            
        );
    }
}



