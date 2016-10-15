import React from 'react'

import SessionList from './SessionList'

const dummySessions = [
  {
    title: 'Mentorship Session',
    startTime: '2016-10-18T10:00:00Z',
    attendees: [
      {
        name: 'Thomas Peterson',
        imageUrl: 'https://avatars2.githubusercontent.com/u/1026406?v=3&s=60'
      }
    ]
  },
  {
    title: 'Mentorship Session',
    startTime: '2016-10-20T11:00:00Z',
    attendees: [
      {
        name: 'Thomas Peterson',
        imageUrl: 'https://avatars2.githubusercontent.com/u/1026406?v=3&s=60'
      }
    ]
  },
  {
    title: 'Mentorship Session',
    startTime: '2016-10-22T16:00:00Z',
    attendees: [
      {
        name: 'Thomas Peterson',
        imageUrl: 'https://avatars2.githubusercontent.com/u/1026406?v=3&s=60'
      },
      {
        name: 'Thomas Peterson',
        imageUrl: 'https://avatars2.githubusercontent.com/u/1026406?v=3&s=60'
      }
    ]
  }
]

const NewSessionForm = () => {
  return <form className="card new-session-form">
    <label>Title</label>
    <input type="text" />

    <label>Invitees</label>
    <input type="text" />

    <button type="submit">Create session</button>
  </form>
}

const SessionsPage = () => {
  return <div className="page session-page">
    <h4 className="session-list-title">Create a Session</h4>
    <NewSessionForm />

    <h4 className="session-list-title">Upcoming Sessions</h4>
    <SessionList sessions={dummySessions} />

    <h4 className="session-list-title">Past Sessions</h4>
    <SessionList sessions={dummySessions.concat(dummySessions)} />
  </div>
}

export default SessionsPage
