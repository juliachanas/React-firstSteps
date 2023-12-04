import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/cardsRedux';

const Card = ({ title, isFavorite, cardId }) => {
  const dispatch = useDispatch();

  const handleFavorite = (e) => {
    e.preventDefault();
    dispatch(toggleCardFavorite(cardId));
  };

  return (
    <li className={styles.card}>
      {title}
      <button className={styles.button}>
        <i
          className={clsx('fa', 'fa-star-o', { [styles.favorite]: isFavorite })}
          onClick={handleFavorite}
        />
      </button>
    </li>
  );
};

export default Card;
