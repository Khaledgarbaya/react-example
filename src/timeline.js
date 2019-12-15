import React, { useState, useEffect } from 'react'
const Timeline = () => {
  const [timeline, setTimeline] = useState([])
  const [status, setStatus] = useState('')
  useEffect(() => {
    fetch('https://k4d.dev/.netlify/functions/timeline')
      .then(response => response.json())
      .then(timelineData => setTimeline(timelineData))
  }, [])

  return (
    <div>
      <h1 className="text-5xl p-4">Timeline</h1>

      <form>
        <label htmlFor="status">Status</label>
        <textarea
          className="block p-2 mx-auto w-64 resize-x border rounded focus:outline-none focus:shadow-outline"
          id="status"
          value={status}
          onChange={e => setStatus(e.target.value)}
          placeholder="what's in your mind"
        />
        <button
          onClick={e =>
            e.preventDefault() ||
            setTimeline(prevTimeline => [
              {
                id: 'asdfsadfsadf',
                text: status,
                user: {
                  name: 'Dillon',
                  screenName: 'Olson',
                  profileImageUrl:
                    'https://api.adorable.io/avatars/150/5deec11247dc7d2491b40afa.png'
                }
              },
              ...prevTimeline
            ])
          }
        >
          Submit
        </button>
      </form>
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
                className="mt-5"
                dangerouslySetInnerHTML={{ __html: t.text }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Timeline
