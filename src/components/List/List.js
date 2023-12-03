import { useSelector } from 'react-redux';
import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import { getListById, getColumnsByList } from '../../redux/store';
import { useParams } from 'react-router';

const List = () => {
  const { listId } = useParams();
  const allColumns = useSelector((columns) =>
    getColumnsByList(columns, listId)
  );
  console.log(allColumns);
  // const listData = useSelector(getListById);
  const listData = useSelector((lists) => getListById(lists, listId));

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h1 className={styles.title}>{listData.title}</h1>
      </header>
      <p className={styles.description}>{listData.description}</p>
      <div className={styles.columns}>
        {allColumns.map((column) => (
          <Column key={column.id} {...column} />
        ))}
      </div>
      <ColumnForm />
    </div>
  );
};

export default List;
