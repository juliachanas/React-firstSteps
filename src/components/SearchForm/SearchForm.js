import styles from './Search.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { updateSearchString } from '../../redux/searchStringRedux';

const SearchForm = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const searchString = useSelector((state) => state.searchString);

  // po każdej zmianie searchString, jest uruchamiany efekt, który
  //przypisze nową wartość - searchString - do inputValue
  useEffect(() => {
    setInputValue(searchString);
  }, [searchString]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSearchString(inputValue));
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
