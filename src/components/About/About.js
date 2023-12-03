import styles from './About.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const About = () => {
  return (
    <div>
      <PageTitle>ABOUT</PageTitle>
      <p className={styles.paragraph}>Lorem ipsum.</p>
    </div>
  );
};

export default About;
