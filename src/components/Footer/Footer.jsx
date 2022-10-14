import React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import './style.scss'

const Footer = () => {
  return (
    <section className='footer-section' data-scroll-section>
      <SectionHeader title='Made by' />
      <h1 className='creator' id='location-text'>
        Twyla Tang
      </h1>
      <SectionHeader title='in' />
      <h2 className='location'>
        London
      </h2>
    </section>
  )
}

export default Footer