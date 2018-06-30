import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
    increaseCount = () => {
        this.props.dispatch({ type: "INCREMENT_COUNT" });
    }

    decreaseCount = () => {
        this.props.dispatch({ type: "DECREMENT_COUNT" });
    }

    render() {
        return (
            <div>
                <h2>Redux Counter</h2>
                <p>{this.props.count}</p>
                <button onClick={this.increaseCount}>Increment</button>
                <button onClick={this.decreaseCount}>Decrement</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    }
}

export default connect(mapStateToProps)(Counter);