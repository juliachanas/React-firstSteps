import styles from './NavBar.module.scss';
import Container from '../Container/Container';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Container>
        <div className={styles.navi}>
          <Link to='/'>
            <i className={`fa fa-tasks ${styles.icon}`}></i>
          </Link>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/favorite'>Favorite</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
