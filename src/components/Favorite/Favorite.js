import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const Favorite = () => {
  return (
    <div>
      <PageTitle>FAVORITE</PageTitle>
      <p className={styles.paragraph}>Lorem ipsum.</p>
    </div>
  );
};

export default Favorite;
