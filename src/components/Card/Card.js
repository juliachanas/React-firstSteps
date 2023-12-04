import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/cardsRedux';
import { removeCard } from '../../redux/cardsRedux';

const Card = ({ title, isFavorite, cardId }) => {
  const dispatch = useDispatch();

  const handleFavorite = (e) => {
    e.preventDefault();
    dispatch(toggleCardFavorite(cardId));
  };

  const handleRemoveCard = (e) => {
    e.preventDefault();
    dispatch(removeCard(cardId));
  };

  return (
    <li className={styles.card}>
      {title}
      <div>
        <button className={styles.button}>
          <i
            className={clsx('fa', 'fa-star-o', {
              [styles.favorite]: isFavorite,
            })}
            onClick={handleFavorite}
          />
        </button>
        <button className={styles.button}>
          <i className={'fa fa-trash'} onClick={handleRemoveCard} />
        </button>
      </div>
    </li>
  );
};

export default Card;
