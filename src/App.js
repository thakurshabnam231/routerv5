import React,{Suspense} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AllQuotes from './pages/AllQuotes'

import Layout from './components/layout/Layout';
import NoFound from './pages/NoFound';
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import LoadingSpinner from './components/UI/LoadingSpinner';

const NewQuote=React.lazy(()=>import('./pages/NewQuote'))
const QuoteDetails=React.lazy(()=>import('./pages/QuoteDetails'))

const App = () => {
  const formData = useSelector(state => state.form)
  useEffect(() => {
    const sendDataHandler = async () => {
      const response=  await fetch('https://redux-7e9a1-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body:JSON.stringify(formData),
      });console.log(response)
      
      if(!response.ok) {
        alert("Error : Failed to Fetch Link")
        
      }
      
    
    };sendDataHandler();
  },[formData])
  return (
    <Layout>
    <Suspense fallback={<div className="centered"><LoadingSpinner/></div>}>
      <Switch>
        <Route exact path='/' >
          <Redirect to='/quotes' />
        </Route>
        <Route exact path='/quotes' component={AllQuotes} />

        <Route path='/quotes/:quotesId'>
          <QuoteDetails />
        </Route>
        <Route path='/new-quotes'>
          <NewQuote />
        </Route>
        <Route path='*'>
          <NoFound />
        </Route>

      </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
