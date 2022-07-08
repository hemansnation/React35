import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import him from './images/himanshu1.jpeg';

// class App extends Component {

//   state = {
//     firstname: '',
//   }

//   handleChange = (e) => {
//     const value = e.target.value;
//     this.setState({
//       firstname: value,
//     })
//   }

//   render(){
//     return (
//       <div>
//         <label htmlFor='firstname'>First Name: </label>
//         <input
//           type='text'
//           id='firstname'
//           name='firstname'
//           placeholder='First Name'
//           value={this.state.firstname}
//           onChange={this.handleChange}
//         />
//         <h1>{this.state.firstname}</h1>
//       </div>
//     )
//   }
// }


class App extends Component {

  state = {
    firstname: '',
    lastname: '',
    country: '',
    title: '',
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    //  key object
    this.setState({
      [name] : value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    console.log(this.state);

  }

  render(){

    const { firstname, lastname, country, title } = this.state;

    return (
      <div>
        <h3>Form Details</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type='text'
              name='firstname'
              placeholder='First Name'
              value={firstname}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <input
              type='text'
              name='lastname'
              placeholder='Last Name'
              value={lastname}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <input
              type='text'
              name='country'
              placeholder='Country'
              value={country}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <input
              type='text'
              name='title'
              placeholder='Title'
              value={title}
              onChange={this.handleChange}
            />
          </div>

          <button class='btn btn-sucess'>
            Submit
          </button>

        </form>
      </div>
    )
  }
}


const rootElement = document.getElementById('root')

ReactDOM.render(<App />, rootElement)