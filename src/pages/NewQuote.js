import React from 'react'
import QuoteForm from '../components/quotes/QuoteForm'

const NewQuote = () => {
    const onAddHandler=()=>{
       console.log("data")
        
    }
    return (
        <div>
        <QuoteForm onAddQuote={onAddHandler}/>
        </div>
    )
}

export default NewQuote
