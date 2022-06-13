import React from 'react';
import ReactDOM from 'react-dom';

// const jsxElement = <h1>This is first React app</h1>

const headerStyle = {
  backgroundColor: 'cyan',
  padding: 25,
  lineHeight: 1.5
}

const header = (
  <header style={headerStyle}>
    <h1>Welcome to React Session</h1>
    <h2>First Session</h2>
    <h3>React JS</h3>
    <p>This is react js and react dom</p>
    <small>June 13, 2022</small>
  </header>
)

const main = (
  <main>
    <p>learn these skills</p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </main>
)

const footer = (
  <footer style={{backgroundColor: 'cyan'}}>
    <p>Copyright 2022</p>
  </footer>
)

const app = (
  <div>
    {header}
    {main}
    {footer}
  </div>
)

const rootElement = document.getElementById('root')

ReactDOM.render(app, rootElement)