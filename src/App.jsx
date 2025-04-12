import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Events from './pages/Events'
import LPL from './pages/LPL'
import Resources from './pages/Resources'
import Estate from './resourcesPages/Estate'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='/lpl' element={<LPL/>}/>
        <Route path='/resources' element={<Resources/>}/>
        <Route path='/estate' element={<Estate/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
