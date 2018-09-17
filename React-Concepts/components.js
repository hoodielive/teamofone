// components are function-like; they take arbitrary inputs called props (i.e. properties) 

// example of a functional component (function) 
function WhatsUp(props) {
  return <h1> Howdy, {props.name} </h1> // returns a React element (we aren't dealing with the DOM) but the virtualDOM
}

class WhatsItGoingToBe extends WhatsUp {
  constructor(props) {
    this.props = props;  
  }
  render() { 
    return <h1> Howdy, {this.props.name} </h1>  
  }
}

// objects are created from functions = objects lol 


