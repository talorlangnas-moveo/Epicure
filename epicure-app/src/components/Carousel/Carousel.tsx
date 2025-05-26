'use client';

import React, { useEffect } from 'react';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import { CardInfo } from '@/types/interfaces/CardInfo';
import Card from '@components/card/Card';
import styles from './Carousel.module.scss';

interface CarouselProps {
  cards: CardInfo[];
  options?: EmblaOptionsType;
}

export default function Carousel({ cards, options = { loop: false } }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  // Example: you can listen to events once emblaApi is ready
  useEffect(() => {
    if (!emblaApi) return;
    console.log('Current slide index:', emblaApi.selectedScrollSnap());
  }, [emblaApi]);

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
