import React from 'react';
import ReactDOM from 'react-dom';
// import him from './images/himanshu1.jpeg';

// states
// class App extends React.Component {

//   state = {
//     count: 0,
//   }

//   render(){
//     const count = this.state.count
//     return (
//       <div>
//         <h1>{count}</h1>
//         <button onClick={() => this.setState({ count: this.state.count + 1})}>
//           Add One
//         </button>
//         <button onClick={() => this.setState({ count: this.state.count - 1})}>
//           Minus One
//         </button>
//       </div>
//     )
//   }
// }

// class App extends React.Component {

//   state = {
//     count: 0,
//   }

//   addOne = () => {
//     this.setState({
//       count: this.state.count + 1
//     })
//   }

//   minusOne = () => {
//     this.setState({
//       count: this.state.count - 1
//     })
//   }

//   render(){
//     const count = this.state.count
//     return (
//       <div>
//         <h1>{count}</h1>
//         <button onClick={this.addOne}>
//           Add One
//         </button>
//         <button onClick={this.minusOne}>
//           Minus One
//         </button>
//       </div>
//     )
//   }
// }


class App extends React.Component {

  state = {
    image: 'https://i.pinimg.com/originals/22/81/89/2281893b67d3f704aacd772f0569e1c4.jpg',
  }

  changeAnimal = () => {
    let dogURL = 'https://i.pinimg.com/originals/22/81/89/2281893b67d3f704aacd772f0569e1c4.jpg'

    let catURL = 'https://i.pinimg.com/originals/3a/5c/85/3a5c850f458b461991ef13c55738512f.jpg'

    let image = this.state.image === catURL ? dogURL : catURL

    this.setState({
      image
    })
  }

  
  render(){
    
    return (
      <div>
        <h1>Animal dog/cat</h1>
        <div>
          <img src={this.state.image} alt='animal' />
        </div>
        
        <button onClick={this.changeAnimal} className='btn btn-add'>
          Change
        </button>
      </div>
    )
  }
}



const rootElement = document.getElementById('root')

ReactDOM.render(<App />, rootElement)