import { useRef,Fragment } from 'react';
import { useState } from 'react'
import {Prompt} from 'react-router-dom'
import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux"
import { formActions } from "../../components/store"

const QuoteForm = (props) => {
  const [isFocused, setIsFocused] = useState(false)
  const authorInputRef = useRef();
  const textInputRef = useRef();
  const dispatch = useDispatch();


  function submitFormHandler(event) {
    event.preventDefault();
    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;
    const newObject = {
      author: enteredAuthor,
      text: enteredText
    }
    dispatch(formActions.addItemHendler(newObject))
    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }
  const finishHandler=()=>{
   setIsFocused(false) 
  }

  const onFocusHandler = () => {
    
    setIsFocused(true);
    console.log('form')
    
  }
  return (
    <Fragment>
    <Prompt when={isFocused} message={()=>'Are you sure to leave this page?All your entered data will be lost'}/>
    <Card>
    
      <form onFocus={onFocusHandler} className={classes.form} onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor='author'>Author</label>
          <input type='text' id='author' ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='text'>Text</label>
          <textarea id='text' rows='5' ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button onClick={finishHandler} className='btn'>Add Quote</button>
        </div>
      </form>
    </Card>
    </Fragment>
  );
};

export default QuoteForm;
