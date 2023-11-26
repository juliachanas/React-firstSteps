import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

const ColumnForm = () => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_COLUMN', payload: { title, icon } });
    setTitle('');
    setIcon('');
  };

  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      <div>
        <label>Title: </label>
        <TextInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Add new title...'
        />
      </div>
      <div>
        <label>Icon: </label>
        <TextInput
          value={icon}
          onChange={(e) => setIcon(e.target.value)}
          placeholder='Add new icon...'
        />
      </div>
      <Button>Add column</Button>
    </form>
  );
};

export default ColumnForm;
