import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  handleIncrement() {
    this.setState({ count: this.state.count + 1 }); 
  }

  render() {
    return (
      <div>
        <span className={ this.getBadgeClasses() }>{this.formatCount()}</span>
        <button 
          onClick={this.handleIncrement} 
          className="btn btn-secondary btn-sm">
          Increment
        </button>
        <ul>
          { this.state.tags.map(tag => <li key={tag}>{ tag }</li>) }
        </ul>
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
