import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Link, Router } from '@reach/router'
import Timeline from './timeline'

const Policy = () => (
  <h1 className="text-5xl p-4">Policy</h1>
)
const About = () => <h1 className="text-5xl p-4">About</h1>
function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/timeline">Timeline</Link>{' '}
        <Link to="/policy">Policy</Link>{' '}
        <Link to="/about">About</Link>
      </nav>
      <Router>
        <Timeline path="timeline" />
        <Policy path="policy" />
        <About path="about" />
      </Router>
    </div>
  )
}

export default App
