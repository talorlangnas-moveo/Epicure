import styles from './cardsDisplay.module.scss';
import { CardInfo } from '@/types/interfaces/cardInfo';
import Card from '@components/card/card';

interface CardsDisplayProps {
  cards: CardInfo[];
}

export default function CardsDisplay({ cards }: CardsDisplayProps) {
  return (
    <div className={styles.cardDisplay}>
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}