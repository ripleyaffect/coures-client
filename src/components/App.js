import React from 'react'

import Navbar from './Navbar'

const App = ({ children }) => {
  console.log(children)
  return <div className="app">
    <Navbar />
    {children}
  </div>
}

export default App