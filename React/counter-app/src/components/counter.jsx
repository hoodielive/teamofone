import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  handleIncrement = product => {
    // asynchronous call 
    console.log(product);
    this.setState({ count: this.state.count + 1 }); 
  }

  render() {
    return (
      <div>
        <span className={ this.getBadgeClasses() }>{this.formatCount()}</span>
        <button 
          onclick={() => this.handleIncrement(product)}
          className="btn btn-secondary btn-sm">
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-"; 
    classes += (this.state.count === 0) ? "warning" : "primary";  
    return classes; 
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count; // prefering to use object destructuring
  }
}

export default Counter;
