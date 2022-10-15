import React, {useEffect, useState, useRef} from 'react'
import gsap from 'gsap'
import classNames from 'classnames'

import SplitText from '../../utils/Split3.min.js'
import './style.scss'
import SectionHeader from '../SectionHeader/SectionHeader'
import useOnScreen from '../../hooks/useOnScreen.js'

const About = () => {
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
      const split = new SplitText("#headline", {
        type: "lines"
      })

      gsap.to(split.lines, {
        duration: 1,
        y: -20,
        opacity: 1,
        stagger: 0.1,
        ease: "power2",
      })
    }
  }, [reveal])

  return (
    <section className={classNames("about-section")} data-scroll-section>
      <SectionHeader title='about'/>
      <p ref={ref} id='headline' className={classNames({"is-reveal": reveal})}>
        Art Objects is an experimental blog website about classic art. Creativity and the art of ‘making’ require dialogue. The
        full purpose of the Art Objects blog is to encourage and inspire. We
        value art, we value insight, and we value opinion.
      </p>
    </section>
  )
}

export default About