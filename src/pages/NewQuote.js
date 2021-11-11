import React from 'react'
import {useHistory} from 'react-router-dom'
import QuoteForm from '../components/quotes/QuoteForm'

const NewQuote = () => {
     const history=useHistory();
    const onAddHandler=(quoteData)=>{
        console.log(quoteData)
        history.push('/quotes')
    }
    return (
        <div>
        <QuoteForm onAddQuote={onAddHandler}/>
        </div>
    )
}

export default NewQuote
