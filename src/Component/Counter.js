import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            number: 0
        }

    }

    onIncrease = () => {
       this.setState((prevState) => ({number: prevState.number + 1}))
       this.props.calculateSum(1);
       //this.props.isReseted(1);
    };

    onDecrease = () => {
        this.setState((prevState) => ({number: prevState.number - 1}))
        this.props.calculateSum(-1);
       // this.props.isReseted(1);
    };

    componentDidUpdate(prevProps){
        if(prevProps.size !== this.props.size){
           this.setState({number:0});
        }
    }

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



