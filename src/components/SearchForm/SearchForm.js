import styles from './Search.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateSearchString } from '../../redux/store';

const SearchForm = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch({ type: 'UPDATE_SEARCHSTRING', payload: inputValue });
    dispatch(updateSearchString(inputValue));
    setInputValue('');
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput
        placeholder='Search…'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button type='submit'>
        <span className='fa fa-search' />
      </Button>
    </form>
  );
};

export default SearchForm;
