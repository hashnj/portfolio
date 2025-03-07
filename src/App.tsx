import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Resume from './pages/Resume'
import Projects from './pages/Projects'

const App:React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Layout />}>
          <Route index element = {<Home />} />
          <Route path = "/about" element = {<About />} />
          <Route path = "/work" element = {<Resume />} />
          <Route path = "/projects" element = {<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App