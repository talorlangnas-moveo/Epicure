'use client'

import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { CardInfo } from "@/types/interfaces/CardInfo";
import styles from './carousel.module.scss'
import Card from '@components/card/card';


interface CarouselProps {
  cards: CardInfo[];
  options?: EmblaOptionsType;
}

export default function Carousel({ cards, options = { loop: false } }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  return (
    <div className={styles.embla}>
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.container}>
          {cards.map((card, idx) => (
            <div className={styles.slide} key={idx}>
              <Card card={card} />
            </div>
          ))}
        </div>
      </div>
      <button onClick={() => emblaApi?.scrollPrev()} className={styles.prev}>
        ‹
      </button>
      <button onClick={() => emblaApi?.scrollNext()} className={styles.next}>
        ›
      </button>
    </div>
  );
}