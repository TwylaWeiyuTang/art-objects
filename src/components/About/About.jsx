import React from 'react'
import './style.scss'
import SectionHeader from '../SectionHeader/SectionHeader'

const About = () => {
  return (
    <section className="about-section" data-scroll-section>
      <SectionHeader title='about'/>
      <p id='headline'>
        Art Objects is an experimental blog website about classic art. Creativity and the art of ‘making’ require dialogue. The
        full purpose of the Art Objects blog is to encourage and inspire. We
        value art, we value insight, and we value opinion.
      </p>
    </section>
  )
}

export default About