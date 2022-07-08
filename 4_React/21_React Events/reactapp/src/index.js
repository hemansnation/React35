import React from 'react';
import ReactDOM from 'react-dom';
// import him from './images/himanshu1.jpeg';

// events
class App extends React.Component {
  state = {
    firstName: '',
    message: '',
    key: ''
  }

  helloUser = () => {
    alert("Hello from helloUser Method");
  }

  handleClick = (e) => {
    this.setState({
      message: 'Hello from message state'
    })
  }

  handleMouseMove = (e) => {
    this.setState({
      message: 'mouse in moving'
    })
    console.log(e);
  }

  handleCopy = () => {
    this.setState({
      message: 'the text has been copied'
    })
  }

  handleChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  render(){
    return (
      <div>
        <button onClick={this.helloUser}>Hello</button>

        <h1>{this.state.message}</h1>

        <button onClick={this.handleClick}>Click here</button>

        <button onMouseMove={this.handleMouseMove}>Move your mouse here</button>

        <h2 onCopy={this.handleCopy}>Copy this text</h2>

        <label htmlFor=''>Type for key press event</label>
        <input type='text' onChange={this.handleChange} />
      </div>
    )
  }

}

const rootElement = document.getElementById('root')

ReactDOM.render(<App />, rootElement)