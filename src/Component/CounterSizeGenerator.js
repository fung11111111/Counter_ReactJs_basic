import React, { Component } from 'react';

export default class CounterSizeGenerator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            size: 0
        };

    }

    updateSize = (event) => {
        console.log(event.target.value);
        let number = event.target.value.length > 0 ? parseInt(event.target.value) : 0;
        this.setState({ size: number });

        this.props.generateSize(number);
    }

    render() {
        if (this.props.iniCounter){
            this.setState({number: 0});
            console.log(this.props.iniCounter);
        }
        return (
            <div>
                <label>Size:</label>
                <input type="number" value={this.state.size} onChange={this.updateSize}></input>
            </div>
        );
    }
}