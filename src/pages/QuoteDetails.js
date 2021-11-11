import React, { Fragment } from 'react'
import { Route, useParams } from 'react-router-dom'
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'
const dummy_data = [
    { id: 'p1', author: 'shabanm', text: 'learning router' },
    { id: 'p2', author: 'riya', text: 'learning javascript' },
]

const QuoteDetails = () => {
    const params = useParams();
    const quote = dummy_data.find(quote => quote.id === params.quotesId);
    if (!quote) {
        return<p>no quote found</p>;
    }

    return (
        <Fragment>
        
            <HighlightedQuote text={quote.text} author={quote.author} />

            <Route path={`/quotes/${params.quotesId}/comments`}>
                <Comments /></Route>
        </Fragment>
    )
}

export default QuoteDetails
