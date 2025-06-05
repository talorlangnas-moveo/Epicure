import { CardType } from '@/types/cardType';
import styles from './cardsDisplay.module.scss';
import { CardInfo } from '@/components/card/card_tmp';
import Card from '@/components/card/card_tmp';

interface CardsDisplayProps {
  cards: CardInfo[];
  type: CardType;
}

export default function CardsDisplay({ cards, type }: CardsDisplayProps) {
  return (
    <div className={`${styles.cardDisplay} ${styles[type]}`}>
      {cards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
}