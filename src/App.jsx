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
import Investment from './resourcesPages/Investment'
import Lifestyle from './resourcesPages/Lifestyle'
import Money from './resourcesPages/Money'
import Retirement from './resourcesPages/Retirement'
import Tax from './resourcesPages/Tax'
import Insurance from './resourcesPages/Insurance'

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
        <Route path='/insurance' element={<Insurance/>}/>
        <Route path='/investment' element={<Investment/>}/>
        <Route path='/lifestyle' element={<Lifestyle/>}/>
        <Route path='/money' element={<Money/>}/>
        <Route path='/retirement' element={<Retirement/>}/>
        <Route path='/tax' element={<Tax/>}/>


      </Routes>
      <Footer/>
    </>
  )
}

export default App
