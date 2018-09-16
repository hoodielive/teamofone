import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
    //imageUrl: "https://picsum.photos/200"
  };


  render() {
    return (
      <React.Fragment>
        <span style={ { fontSize: 30 }} className="badge badge-primary m-2">{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count; // prefering to use object destructuring
  }
}

export default Counter;
