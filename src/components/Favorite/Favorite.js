import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/store';
import Card from '../Card/Card';

const Favorite = () => {
  const favoritedCards = useSelector(getFavoriteCards);
  console.log(favoritedCards);

  return (
    <div>
      <PageTitle>FAVORITE</PageTitle>
      <div className={styles.diva}>
        <div className={styles.favorites}>
          <ul className={styles.cards}>
            {favoritedCards.map((card) => (
              <Card
                key={card.id}
                className={styles.cards}
                cardId={card.id}
                title={card.title}
                isFavorite={card.isFavorite}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
