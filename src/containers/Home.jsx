import React, {useState} from 'react'

import '../styles/home.scss'

import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Header/Header'
import Featured from '../components/Featured/Featured'
import About from '../components/About/About'
import Gallery from '../components/Gallery/Gallery'
import Footer from '../components/Footer/Footer'
import CustomCursor from '../CustomCursor'
import { useRef } from 'react'
import { useEffect } from 'react'
import useLocoScroll from '../hooks/useLocoScroll'

const Home = () => {
  // add a loader for the website
  const [preloader, setPreloader] = useState(true)

  useLocoScroll(!preloader)

  // the timer for the loading page is 3s
  const [timer, setTimer] = useState(3)

  const id = useRef(null)

  const clear = () => {
    window.clearInterval(id.current) // clears the timer set before
    setPreloader(false)
  }

  // once the page load
  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer(timer => timer - 1)
    }, 1000)
  }, [])

  // everytime timer changes
  useEffect(() => {
    if (timer === 0) {
      clear();
    }
}, [timer])

  return (
    <>
        <CustomCursor />
        {preloader ? (<div className='loader-wrapper absolute'>
            <h1>Twyla Tang</h1>
            <h2>Art Objects</h2>
        </div>) : (
        <div className='main-container' id='main-container' data-scroll-container>
            <Navbar />
            <Header />
            <Featured />
            <About />
            <Gallery />
            <Footer />
        </div>)}
    </>
  )
}

export default Home