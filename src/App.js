import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import { Link, Router } from '@reach/router'

const Timeline = () => {
  const [timeline, setTimeline] = useState([])

  useEffect(() => {
    fetch('https://k4d.dev/.netlify/functions/timeline')
      .then(response => response.json())
      .then(timelineData => setTimeline(timelineData))
  }, [])

  return (
    <div>
      <h1>Timeline</h1>
      <ul>
        {timeline.map(t => (
          <li key={t.id}>
            <div className="p-10 border border-gray-400 bg-white shadow">
              <div className="flex items-center">
                <img
                  className="w-10 h-10 rounded-full mr-4"
                  src={t.user.profileImageUrl}
                  alt={t.user.name}
                />
                <div className="text-sm">
                  <p className="text-gray-900 leading-none">
                    {t.user.name}
                  </p>
                  <p className="text-gray-600">
                    @{t.user.screenName}
                  </p>
                </div>
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: t.text }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

const Policy = () => <h1>Policy</h1>
const About = () => <h1>About</h1>
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
