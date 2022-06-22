import React from 'react';
import ReactDOM from 'react-dom';
// import him from './images/himanshu1.jpeg';

// list and 
// map - it is a method in array class

// destructure
// const { num } = {numbers}
//         props = {numbers}
//   [hello, bye] = [10, 'hi']

// mapping array

const Numbers = ({numbers}) => {
  const list = numbers.map((number) => <li key={number}>{number}</li>)

  return list
}

// mapping array of arrays

const skills = [
  ['HTML', 10],
  ['CSS', 7],
  ['JavaScript', 9],
  ['React', 8]
]

// {skill: [tech, level]} = {skill: ['HTML', 10]}

const Skill = ({skill: [tech, level]}) => {
  return (
    <li>
      {tech} {"=>"} {level}
    </li>
  )
}

const Skills = ({skills}) => {
  const skillList = skills.map((skill) => {
    return (
      <Skill skill={skill} />
    )
  })
  console.log(skillList);

  return skillList
}


// array of objects

const countries = [
  { name: 'India', city: 'Indore'},
  { name: 'US', city: 'Boston'},
  { name: 'Nepal', city: 'Kathmandu'},
  { name: 'UK', city: 'London'},
]

// { country: { name, city } } = { country: { name: 'India', city: 'Indore'} }

const Country = ({ country: { name, city } }) => {
  return (
    <div>
      <h1>{name}</h1>
      <small>{city}</small>
    </div>
  )
}



const Countries = ({ countries }) => {
  const countryList = countries.map((country) => (
    <Country key={country.name} country={country} />
  ))

  return countryList
}

const App = () => {
  const n = [1,2,3,4,5];


  return (
    <div>
      <h1>Numbers</h1>
      <Numbers numbers={n} />
      <Skills skills={skills} />
      <Countries countries={countries} />
    </div>
  )
}

const rootElement = document.getElementById('root')

ReactDOM.render(<App />, rootElement)