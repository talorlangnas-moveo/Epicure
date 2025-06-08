import { CardType } from '@/types/cardType';
import styles from './cardsDisplay.module.scss';
import { CardInfo } from '@/components/card/card';
import Card from '@/components/card/card';

interface CardsDisplayProps {
  cards: CardInfo[];
  type: CardType;
}

export default function CardsDisplay({ cards, type }: CardsDisplayProps) {

const top3Cards = cards.slice(0, 3);

  return (
    <div className={`${styles.cardDisplay} ${styles[type]}`}>
      {top3Cards.map((card) => (
        <Card key={card.id} {...card} className={type} />
      ))}
    </div>
  );
}