import React from 'react'
import QuoteList from '../components/quotes/QuoteList'
import {useSelector} from 'react-redux'

const dummy_data = [
    { id: 'p1', author: 'shabanm', text: 'learning router' },
    { id: 'p2', author: 'riya', text: 'learning javascript' },
]


const AllQuotes = () => {
    const data=useSelector(state=>state.items)
    console.log(data)
    return (
        <div>
  <QuoteList quotes={data} />
        </div>
    )
}

export default AllQuotes
