import React, { useState, Dispatch, SetStateAction } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"



const App: React.FC = () => {
  return (
    <Router>
      <main className="App">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
      </main>
    </Router>
  )
}

export default App;