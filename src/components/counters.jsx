/*
React Rule of Thumb-
The component that owns a piece of the state, should be the one modifying it

key attribute is internally used by react and we will not able to access it

Rendered never updates original DOM, it alsways update React's vistual DOM.
React compares old virtual DOM and new virtual DOM and updates only the changed 
components in original DOM
*/
import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
