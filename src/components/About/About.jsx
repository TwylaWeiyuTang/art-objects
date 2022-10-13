import React from 'react'
import './style.scss'
import SectionHeader from '../SectionHeader/SectionHeader'

const About = () => {
  return (
    <section className="about-section">
      <SectionHeader title='about'/>
      <p id='headline'>
        Flirty Flowers is a blog about flowers and the floral designers who make
        them into art. Creativity and the art of ‘making’ require dialogue. The
        full purpose of the Flirty Flowers blog is to encourage and inspire. We
        value art, we value insight, and we value opinion.
      </p>
    </section>
  )
}

export default About