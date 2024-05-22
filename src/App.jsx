import { useState ,useEffect} from 'react'
import './App.css'
import {BrowserRouter,Routes,Route, useNavigate} from 'react-router-dom'

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Loader/>}></Route>
      <Route path='/main' element={<Page/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}
function Loader(){
    const nav=useNavigate();
  useEffect(()=>{
  setTimeout(()=>{nav("/main")},3000);
  },[nav])

return (
<>
    <div className='out'>
    <div className="bolt"></div>
    <div className="top">Loading Creativity <span id='1'>.</span><span id='2'>.</span><span id='3'>.</span><span id='4'>.</span></div>
    </div>
    </>
)
}
function Page(){
  return(
    <>
    <div className="nav">
      <div className="container">navv</div>
    </div>
    <div className="info">
        <div className="container">
          <h1>Crafting Tomorrow's Tech Today</h1>
          <p>Hello! I'm Nikhilesh Joshi, a passionate and driven learner, specializing in <a href="https://careerfoundry.com/en/blog/web-development/what-is-the-mern-stack/#mern-stack-technologies">MERN</a> stack. </p>
          
        </div>
      </div>
      <div className="project">
        <div className="container">
          <h1>projects</h1>
          <div></div>
        </div>
      </div>
      <div className="skills">
        <div className="container">
          <h1>skills</h1>
          <div></div>
        </div>
      </div>
      <div className="contact">
        <div className="container">
          <h1>contact me</h1>
          <div></div>
        </div>
      </div>
      <div className="con">
      <div className="container">
        <h2>stay in touch</h2>
      </div>
      </div>
      <div className="footer">
      </div>
    </>
  )
}

export default App
