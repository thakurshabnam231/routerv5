import React from 'react'
import QuoteList from '../components/quotes/QuoteList'
const dummy_data = [
    { id: 'p1', author: 'shabanm', text: 'learning router' },
    { id: 'p2', author: 'riya', text: 'learning javascript' },
]
const AllQuotes = () => {
    return (
        <div>
  <QuoteList quotes={dummy_data} />
        </div>
    )
}

export default AllQuotes
