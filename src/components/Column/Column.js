import { useSelector } from 'react-redux';
import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';

import { getFilteredCards } from '../../redux/store';

const Column = (props) => {
  const cards = useSelector((state) => getFilteredCards(state, props.id));

  return (
    <article className={styles.column}>
      <h1 className={styles.title}>
        <span className={styles.icon + ' fa fa-' + props.icon} /> {props.title}
      </h1>
      <ul className={styles.cards}>
        {cards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            isFavorite={card.isFavorite}
            cardId={card.id}
          />
        ))}
      </ul>
      <CardForm columnId={props.id} />
    </article>
  );
};

export default Column;
