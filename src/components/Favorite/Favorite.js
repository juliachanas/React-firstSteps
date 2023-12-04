import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/cardsRedux';
import Card from '../Card/Card';

const Favorite = () => {
  const favoritedCards = useSelector(getFavoriteCards);
  // console.log(favoritedCards);

  console.log('favoritedCards', favoritedCards);
  return (
    <div>
      <PageTitle>FAVORITE</PageTitle>
      <div className={styles.diva}>
        {favoritedCards.length ? (
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
        ) : (
          <div>NO CARDS</div>
        )}
      </div>
    </div>
  );
};

export default Favorite;
