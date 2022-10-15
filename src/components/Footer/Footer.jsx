import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import SectionHeader from '../SectionHeader/SectionHeader'
import SplitText from '../../utils/Split3.min.js'
import './style.scss'
import useOnScreen from '../../hooks/useOnScreen'

const Footer = () => {
  const ref = useRef(null)

  const [reveal, setReveal] = useState(false)
  const onScreen = useOnScreen(ref)
  
  // if we navigate to about section, which means when about section in on screen, then start to
  // reveal the text
  useEffect(() => {
    if (onScreen) setReveal(onScreen)
  }, [onScreen])

  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#location-text", {
        type: "lines",
        linesClass: "lineChildren",
      })

      const splitParent = new SplitText("#location-text", {
        type: "lines",
        linesClass: "lineParent",
      })

      gsap.fromTo(split.lines, { y: 300},
        {
        duration: 1,
        y: 0,
        opacity: 1,
        stagger: 0.1,
        ease: "power2",
      })
    }
  }, [reveal])

  return (
    <section className='footer-section' data-scroll-section>
      <SectionHeader title='Made by' />

      {/* if 'is-reveal' equals to true, so when the value of reveal is true, then the is-reveal
      class will be added into this element*/}
      <h1 className={classNames('creator', {'is-reveal': reveal})} id='location-text' ref={ref}>
        Twyla Tang
      </h1>
      <SectionHeader title='in' />
      <h2 className={classNames('location', {'is-reveal': reveal})} id='location-text'>
        London
      </h2>
    </section>
  )
}

export default Footer