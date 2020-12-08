import React, { Component } from 'react';

export default class CounterGroupSum extends Component {
    render(){
        return (
           <div>
               <span >The sum is: {this.props.sum}</span>
           </div>
        );
    }
}