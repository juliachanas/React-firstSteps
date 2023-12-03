import styles from './Card.module.scss';

const Card = (props) => {
  return (
    <li className={styles.card}>
      {props.title}
      <span className={'fa fa-star-o'} />
    </li>
  );
};

export default Card;
