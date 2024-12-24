import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import WorkoutSessions from './WorkoutSessions'
import Gallery from './Gallery'
import Pricing from './Pricing';
import  Contact  from './Contact'
import BMICalculator from './BMICalculator'
import Footer from './Footer'

function Home() {
  return (
   <>
    <Navbar/>
    <Hero/>
    <WorkoutSessions/>
    <Gallery/>
    <Pricing/>
    <Contact/>
    <BMICalculator/>
    <Footer/>
   </>
  )
}

export default Home
