import React from 'react'
import { IndexRoute, Route } from 'react-router'

import App from './components/App'
import HomePage from './components/HomePage'
import CoursesPage from './components/CoursesPage'
import SessionsPage from './components/SessionsPage'
import SchedulePage from './components/SchedulePage'

const routes = <Route path="/" component={App}>
  <IndexRoute component={HomePage} />
  <Route path="courses" component={CoursesPage} />
  <Route path="sessions" component={SessionsPage} />
  <Route path="schedule" component={SchedulePage} />
</Route>

export default routes
