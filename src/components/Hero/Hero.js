import styles from './Hero.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const Hero = () => {
  return (
    <div>
      <div>
        <PageTitle>MY FIRST REACT APP</PageTitle>
      </div>
      <p className={styles.subtitle}>
        A simple to-do app, with lists, columns and card
      </p>
    </div>
  );
};

export default Hero;
