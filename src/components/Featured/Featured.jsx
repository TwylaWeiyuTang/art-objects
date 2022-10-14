import React from 'react'
import './style.scss'
import photos from '../../utils/sampleData'

const Featured = () => {
  // extract two photos url separately from photos
  const [firstUrl, secondUrl] = photos

  return (
    <section className="featured-section" data-scroll-section>
      <div className='featured-row-layout'>
        <h6>Palace of Versailles</h6>
        <img src={firstUrl} />
      </div>

      <div className='featured-column-layout'>
        <h6>Queen of Great Britain and the Princess Royal</h6>
        <img src={secondUrl} />
      </div>
    </section>
  )
}

export default Featured