import React from 'react'

import Navbar from './Navbar'

const App = ({ children }) => {
  console.log(children)
  return <div className="app">
    <Navbar />
    <div className="page-container">
      {children}
    </div>
  </div>
}

export default App