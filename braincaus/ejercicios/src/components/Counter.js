import React, { Component } from 'react'
import PropTypes from "prop-types";

class Counter extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <p>
                Clicked: {value} times
                {' '}
                <button >
                    +
                </button>
                {' '}
                <button >
                    -
                </button>
                {' '}
                <button >
                    Increment if odd
                </button>
                {' '}
                <button >
                    Increment async
                </button>
            </p>
        );
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired
    // onIncrement: PropTypes.func.isRequired,
    // onDecrement: PropTypes.func.isRequired
};


export default Counter