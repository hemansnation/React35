import React from 'react';
import ReactDOM from 'react-dom';
import him from './images/himanshu1.jpeg';

// props

const User = (props) => {
  console.log(props);  // { firstname: 'Himanshu', lastname:'Rama}
//  {}

  return (
    <div>
      <h1>
        {props.firstname}
        {props.lastname}
      </h1>
    </div>
  )
}

// const welcome = 'Welcome to React'
const title = 'Start your React Project'
const author = {
  first: 'Piyush',
  last: 'Joshi'
}

const Header = (props) =>{

  return (
    <header>
      <h1>{props.welcome}</h1>
      <h2>{title}</h2>
      <h3>{author.first} {' '} {author.last}</h3>
    </header>
  )
}

const Main = (props) => {
  return (
    <div>
      <h1>{props.welcome}</h1>
      <p>{props.date}</p>
      <h2>{props.age}</h2>
    </div>
  )
}

const Status = (props) => {
  let status = props.status ? 'You can drive' : 'You cannot drive';
  
  return <h1>{status}</h1>
}

// const Skills = (props) => {
//   return (
//     <div>
//       <ul>{props.skills}</ul>
//     </div>
//   )
// }


const Skills = (props) => {
  const skillList = props.skills.map( (s) => {
    return <li>{s}</li>
  })
  return (
    <div>
      <ul>
        {skillList}
      </ul>
    </div>
  )
}


const App = () => {
  const hello = 'hello user'
  const age = 24
  const date = 'June 20, 2022'
  const status = true

  return (
    <div>
      <Header welcome='Welcome to react' />
      <User />
      <Main welcome={hello} date={date} age={age} />
      <Status status={status} />
      <Skills skills={['HTML', 'CSS', 'JavaScript']} />
    </div>
  )
}

const rootElement = document.getElementById('root')

ReactDOM.render(<App />, rootElement)