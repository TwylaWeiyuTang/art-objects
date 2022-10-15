import React, { useState } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import classNames from 'classnames';
import './style.scss'
import { useEffect } from 'react';
import { refresh } from 'less';
import { useRef } from 'react';
import useOnScreen from '../../hooks/useOnScreen'

const images = [
  {
    src:
      "https://images.unsplash.com/photo-1566204773863-cf63e6d4ab88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1345&q=100",
    title: "Dracaena Trifasciata",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaing",
  },
  {
    src:
      "https://images.unsplash.com/photo-1558603668-6570496b66f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=100",
    title: "Cereus Penuvianus",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaing",
  },
  {
    src:
      "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=100",
    title: "Calliope",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaing",
  },
  {
    src:
      "https://images.unsplash.com/photo-1611145367651-6303b46e4040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2006&q=100",
    title: "Golden Pothos",
    subtitle: "Living Room",
    category: "Shooting / Adv.Campaing",
  },
];

const GalleryItem = ({src, category, subtitle, title, updateActiveImage, index}) => {
  const ref = useRef(null)
  const onScreen = useOnScreen(ref, 0.5)

  useEffect(() => {
    if (onScreen) {
      updateActiveImage(index)
    }
  }, [onScreen, index])
  return <div className={classNames('gallery-item-wrapper', {'is-reveal': onScreen})} ref={ref}>
    <div />
    <div className='gallery-item'>
      <div className='gallery-item-info'>
        <h1 className='gallery-info-title'>{title}</h1>
        <h6 className='gallery-info-subtitle'>{subtitle}</h6>
        <p className='gallery-info-category'>{category}</p>
      </div>

      <div 
        className='gallery-item-image'
        style={{backgroundImage: `url(${src})`}}
      ></div>
    </div>
    <div/>
  </div>
}

const Gallery = ({src, index, columnOffset}) => {
  const ref = useRef(null)
  const [activeImage, setActiveImage] = useState(1)

  useEffect(() => {
    setTimeout(() => {
      let sections = gsap.utils.toArray('.gallery-item-wrapper')
      console.log(sections)
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          start: 'top top',
          trigger: ref.current,
          scroller: '#main-container', // main scroller
          pin: true,
          scrub: 0.5,
          snap: 1/(sections.length - 1),
          end: () => `+=${ref.current.offsetWidth}`
        }
      })
      ScrollTrigger.refresh()
    })
  }, [])

  const handleUpdateActiveImage = (index) => {
    setActiveImage(index + 1)
  }
  return (
    <section className='gallery-section' data-scroll-section>
      <div className='gallery' ref={ref}>
        <div className='gallery-counter'>
          <span>{activeImage}</span>
          <span className='divider' />
          <span>{images.length}</span>
        </div>
        {images.map((image, index) => (
          <GalleryItem 
            key={image.src}
            index={index}
            {...image} // all the objects from the image
            updateActiveImage= {(index) => setActiveImage(index + 1)}
          />
        ))}
      </div>
    </section>
  )
}

export default Gallery