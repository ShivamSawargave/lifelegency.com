import React from 'react'
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import "./App.css"
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkoutSessions from './components/WorkoutSessions';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import BMICalculator from './components/BMICalculator';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import  Home  from './components/Home';
import MsgContact from './components/MsgContact';


function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='Navbar' element={<Navbar/>}/>
          <Route path='Hero' element={<Hero/>}/>
          <Route path='WorkoutSessions' element={<WorkoutSessions/>}/>
          <Route path='Gallery' element={<Gallery/>}/>
          <Route path='Pricing' element={<Pricing/>}/>
          <Route path='Contact' element={<Contact/>}/>
          <Route path='BMICalculator' element={<BMICalculator/>}/>
          <Route path='Footer' element={<Footer/>}/>
          <Route path='MsgContact' element={<MsgContact/>}/>
        </Routes>
        <ToastContainer mode='dark' position='top-center'/>
            </>
  )
}

export default App
