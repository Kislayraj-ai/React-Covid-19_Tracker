import { useState, useEffect } from 'react';
import classes from './SearchForm.module.css';
import { useValue } from '../use-contextStore';

const SearchForm = () => {
  const [input, setInput] = useState('');
  const { setSearch } = useValue();
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    setSearch(input);
  }, [input, setSearch]);

  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <h6>Search</h6>
        <input type="text" onChange={inputHandler} placeholder="e.g. india" />
      </form>
    </div>
  );
};

export default SearchForm;
