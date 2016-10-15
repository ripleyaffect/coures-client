import moment from 'moment'
import React from 'react'

const SessionListSessionAttendee = ({ imageUrl, name }) => {
  return <img
      alt={name}
      className="session-list-session-attendee"
      src={imageUrl}
  />
}

const SessionListSession = ({ attendees, title, startTime, index, offset=30 }) => {
  startTime = moment(startTime)
  return <div className="card session-list-session" style={{left: index * 200 + offset}}>
    <h3 className="session-list-session-title">{title}</h3>
    <p className="session-list-session-start-time">
      {startTime.format('MMM Do h:mmA')}
    </p>
    {attendees.map(attendee => <SessionListSessionAttendee {...attendee} />)}
  </div>
}

const SessionList = ({ sessions }) => {
  return <div className="session-list">
    {sessions.map((session, index)=> <SessionListSession {...session} index={index} />)}
  </div>
}

export default SessionList
