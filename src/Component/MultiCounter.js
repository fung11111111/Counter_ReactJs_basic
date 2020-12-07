import React, { Component } from 'react';
import CounterGroup from './CounterGroup'
import CounterSizeGerator from './CounterSizeGenerator';
import CounterGroupSum from './CounterGroupSum';

export default class MultiCounter extends Component {
    constructor(props){
        super(props);

        this.state = {
            size: 0
        };

    }

    getCounterSize=(data_from_child)=>{
        this.setState({size: data_from_child});
        console.log(data_from_child);
    }
    
    render(){
        return (
            <div>
              <CounterSizeGerator functionCallFromParent={this.getCounterSize.bind(this)}/>
              <CounterGroupSum />
              <CounterGroup size={this.state.size}/>
        <span>My state size is: {this.state.size}</span>
            </div>
        );
    }
}