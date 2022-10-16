import React from 'react'
import gsap from 'gsap'
import SplitText from '../../utils/Split3.min.js'

import './style.scss'
import photos from '../../utils/sampleData'
import sticker1 from '../../utils/images/pearl-sticker.png'
import sticker2 from '../../utils/images/statue-sticker.png'
import sticker3 from '../../utils/images/st_small_sticker.png'
import sticker5 from '../../utils/images/sticker5.png'
import sticker6 from '../../utils/images/sticker-9.png'
import sticker7 from '../../utils/images/cutbg-sticker.png'
import { useEffect } from 'react'
import { useRef } from 'react'

const Header = () => {

  useEffect(() => {
    const split = new SplitText("#header-text", {
      type: "lines",
      linesClass: "lineChildren",
    })

    const splitParent = new SplitText("#header-text", {
      type: "lines",
      linesClass: "lineParent",
    })

    gsap.to(split.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
    })
  }, [])

  return (
    <section className='header-section' data-scroll-section>
      {/* <h1 id='header-text'>A</h1>
      <h1 id='header-text'>R</h1>
      <h1 id='header-text'>T</h1> */}
      <h1 id='header-text' style={{position: "relative", zIndex: "100"}}>Art</h1>
      <h1 id='header-text' >Objects</h1>
      <div className='images'>
        <img id='sticker1' src={sticker1} />
        {/* <img id='sticker3' src={sticker3} /> */}
        <img id='sticker7' src={sticker7} />
        {/* <img id='sticker2' src={sticker2} /> */}
        {/* <img id='sticker5' src={sticker5} /> */}
        <img id='sticker6' src={sticker6} />
      </div>
    </section>
  )
}

export default Header