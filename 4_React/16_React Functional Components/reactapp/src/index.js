import React from 'react';
import ReactDOM from 'react-dom';
import him from './images/himanshu1.jpeg';

// components

// - functional component / presentational component/ stateless component/ dumb component
// - class component / container component/ statefull component/ smart component


// functional component

// const ComponentName = () => {
//   return jsx
// }

const headerStyle = {
  backgroundColor: 'cyan',
}

const Header = () => {
  const hello = `First React component`

  return (
      <header style={headerStyle}>
        <h1>{hello}</h1>
        <h2>component</h2>
        <p>this is react component session</p>
        <small>15 June 2022</small>
      </header>
  )
}


const User = () => {

  return (
    <div>
      <img src={him} alt='Himanshu' />
      <h2>Himanshu Ramchandani</h2>
    </div>
  )
}

const Main = () => {
  return (
    <main>
      <div>
        <p>User on our Platform</p>
        <User />
      </div>
    </main>
  )
}

const Footer = () => {
  return (
    <footer>
      <p>Copyright 2022</p>
    </footer>
  )
}

const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

const rootElement = document.getElementById('root')

ReactDOM.render(<App />, rootElement)