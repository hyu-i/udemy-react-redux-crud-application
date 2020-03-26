import React, {Component} from "react";


// class App extends Component {
//     render() {
//         return <h1>helloWorld</h1>;
//     }
// }

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  handlePlusButton = () => {
    console.log("handlePlusButton")
    this.setState({ count: this.state.count + 1})
  }
  handleMainasButton = () => {
    if(this.state.count > 0) {
      this.setState({ count: this.state.count - 1})
    } 
    return
  }
  
  render() {
    return (
      <React.Fragment>
        <div>count: { this.state.count }</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMainasButton}>-1</button>
      </React.Fragment>
      )
  }
}


export default App;
