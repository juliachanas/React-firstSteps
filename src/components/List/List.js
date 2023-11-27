import { useSelector } from 'react-redux';
import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import { getAllColumns } from '../../redux/store';

const List = () => {
  // const columns = useSelector((state) => state.columns);
  const columns = useSelector(getAllColumns);

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          Things to do <span>soon</span>
        </h1>
      </header>
      <p className={styles.description}>
        Interesting things I want to check out
      </p>
      <div className={styles.columns}>
        {columns.map((column) => (
          <Column key={column.id} {...column} />
        ))}
      </div>
      <ColumnForm />
    </div>
  );
};

export default List;
