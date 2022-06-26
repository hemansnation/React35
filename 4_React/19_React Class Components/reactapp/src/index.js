import React from 'react';
import ReactDOM from 'react-dom';
// import him from './images/himanshu1.jpeg';

// class components

// class Header extends React.Component {
//   constructor(props){
//     super(props) // to call parent class constructor
//   }
  
//   render(){
//     return (
//       <header>
//         <div>
//           <h1>Class components react</h1>
//           <h2>learn react</h2>
//           <small>June 26, 2022</small>
//         </div>
//       </header>
//     )
//   }
// }

// class Header extends React.Component {
//   constructor(props){
//     super(props) // to call parent class constructor
//   }
  
//   render(){
//     return (
//       <header>
//         <div>
//           <h1>{this.props.data.welcome}</h1>
//           <h2>{this.props.data.title}</h2>
//           <small>{this.props.data.date}</small>
//           <h3>{this.props.data.author.firstName}</h3>
//         </div>
//       </header>
//     )
//   }
// }


// class Header extends React.Component {
//   constructor(props){
//     super(props) // to call parent class constructor
//   }
//   // {firstname, lastname} = {'him', 'rama'}
//   render(){
//     console.log(this.props.data);
//     const {
//       welcome, 
//       title, 
//       author: {firstName, lastName},
//       date 
//     } = this.props.data


//     return (
//       <header>
//         <div>
//           <h1>{welcome}</h1>
//           <h2>{title}</h2>
//           <small>{date}</small>
//           <h3>{firstName} {lastName}</h3>
//         </div>
//       </header>
//     )
//   }
// }


const buttonStyle = {
  backgroundColor: 'blue',
  padding:10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 18,
  color: 'white'
}

const Button = ({ text, onClick, style}) => {
  return (
    <button style={style} onClick={onClick}>
      {text}
    </button>
  )
}


class Header extends React.Component {

  helloPeople = () => {
    alert('Hello From method of Header')
  }
  
  render(){
    console.log(this.props.data);
    const {
      welcome, 
      title, 
      author: {firstName, lastName},
      date 
    } = this.props.data


    return (
      <header>
        <div>
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <small>{date}</small>
          <h3>{firstName} {lastName}</h3>
          {/* <button onClick={this.helloPeople}>Hello</button> */}

          <Button text='Hello User' onClick={this.helloPeople} style={buttonStyle} />
        </div>
      </header>
    )
  }
}



// class TechList extends React.Component {
//   constructor(props){
//     super(props)
//   }

//   render(){
//     const techs = ['HTML', 'CSS', 'JavaScript']
//     const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)

//     return techsFormatted
//   }
// }


class TechList extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    const techs = this.props.techs
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)

    return techsFormatted
  }
}


class Main extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <main>
        <div>
          <p>Must have skills for Reactjs</p>
          <ul>
            <TechList techs={this.props.techs} />
          </ul>
        </div>
      </main>
    )
  }
}

class App extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    const data = {
      welcome: 'welcome to react sessions',
      title: 'learn react',
      author: {
        firstName: 'Him',
        lastName: 'Rama'
      },
      date: 'June 26, 2022'
    }

    const techs = ['HTML', 'CSS', 'JavaScript']

    return (
      <div>
        <Header data={data} />
        <Main techs={techs} />
      </div>
    )
  }
}


const rootElement = document.getElementById('root')

ReactDOM.render(<App />, rootElement)