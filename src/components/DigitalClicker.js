import React, { Component } from 'react';

export default class DigitalClicker extends Component {
    state = {
        timesClicked: 0
    }

    handleClick = () => {
        this.setState(previousState =>{
            return {
                timesClicked: previousState.timesClicked + 1
            }
        })
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                <label>{this.state.timesClicked}</label>
            </button>
        )
    }
}
