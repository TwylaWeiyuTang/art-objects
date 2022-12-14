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
      "https://images.unsplash.com/photo-1584285418504-010afe0e2676?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1416&q=80",
    title: "Coastal Scene with the Embarkation of Saint Paul",
    subtitle: "1655",
    category: "By Claude Lorrain",
  },
  {
    src:
      "https://images.unsplash.com/photo-1579009420909-b837eefa4274?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1427&q=80",
    title: "Garden Motif",
    subtitle: "1905",
    category: "Pitthordt Ludovit",
  },
  {
    src:
      "https://images.unsplash.com/photo-1614247262098-76459e80e152?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1341&q=80",
    title: "Cleopatra's Banquet",
    subtitle: "1675-1680",
    category: "By Gerad de Lairesse",
  },
  {
    src:
      "https://images.unsplash.com/photo-1577720580479-7d839d829c73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1084&q=80",
    title: "Near Brodick",
    subtitle: "1849-1851",
    category: "William Andrews Nesfield",
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
    <section className='gallery-section' id='gallery-section-id' data-scroll-section>
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