import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom'
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search)
  console.log(queryParams);
  const isSortAsc = queryParams.get('sort') === 'asc'
  console.log(location)
  const changeHandler = () => {
    history.push(`${location.pathname}?sort=${( isSortAsc ? 'desc' : 'asc')}`)
  }
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeHandler}>Sorting Quote asending{isSortAsc ? 'desc' : 'asc'} </button>
        <ul className={classes.list}>
          {props.quotes.map((quote) => (
            <QuoteItem
              key={quote.id}
              id={quote.id}
              author={quote.author}
              text={quote.text}
            />
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default QuoteList;
