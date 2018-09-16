import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3']
  };


  render() {
    // let classes = this.getBadgeClasses(); 
    
    return (
      <React.Fragment>
        <span style={ { fontSize: 30 }} className={ this.getBadgeClasses() }>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          { this.state.tags.map(tag => <li>{ tag }</li>) }
        </ul>
      </React.Fragment>
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
