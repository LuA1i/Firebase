import React from 'react'

import './App.css'
import Main from './pages/main/main'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import Navbar from './components/navbar'
import CreatePost from './pages/create-post/create-post'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/create-post" element={<CreatePost />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
