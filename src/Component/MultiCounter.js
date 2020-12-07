import React, { Component } from 'react';
import CounterGroup from './CounterGroup'

export default class MultiCounter extends Component {
    constructor(props){
        super(props);

        this.state = {
            size: 0
        };
    }
    onChagne = (event) => {
        console.log(event.target.value);
        let number = event.target.value.length > 0 ? parseInt(event.target.value) : 0;
        this.setState({size: number});
    }
    render(){
        const size = 0;
        return (
            <div>
              <input type = "number" value={this.state.size} onChange= {this.onChagne}></input>
              <CounterGroup size={this.state.size}/>
            </div>
        
        );
    }
}