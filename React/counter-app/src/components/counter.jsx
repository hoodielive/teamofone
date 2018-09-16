import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3']
  };


  render() {
    // let classes = this.getBadgeClasses(); 
    
    renderTags() {
      if (this.state.tags.length === 0) return <p>There are no tags</p>  
        return <ul>{this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}</ul>
    }

    return (
      <div>
        { this.renderTags() }
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count; // prefering to use object destructuring
  }
}

export default Counter;
