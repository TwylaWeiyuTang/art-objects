import React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import './style.scss'

const Footer = () => {
  return (
    <section className='footer-section'>
      <SectionHeader title='Made in' />
      <h1 className='location' id='location-text'>
        Rio de Janeiro
      </h1>
    </section>
  )
}

export default Footer