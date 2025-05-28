'use client'

import React, { ReactNode } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import styles from './carousel.module.scss'

interface CarouselProps {
  children: ReactNode
  options?: EmblaOptionsType
}

export default function Carousel({
  children,
  options = { loop: false, dragFree: true },
}: CarouselProps) {
  const [emblaRef] = useEmblaCarousel(options)

  return (
    <div className={styles.embla}>
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.container}>
          {React.Children.map(children, (child, idx) => (
            <div className={styles.slide} key={idx}>
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
