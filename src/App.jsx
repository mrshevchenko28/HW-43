import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'
import NoPage from './Components/NoPage'
import Layout from './Layout'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/*" element={<NoPage/>}/>
          </Route>
          
        </Routes>
      </Router>  
    </>
  )
}

export default App
