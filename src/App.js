
import { Route, Switch, Redirect } from 'react-router-dom';
import AllQuotes from './pages/AllQuotes'
import QuoteDetails from './pages/QuoteDetails';
import NewQuote from './pages/NewQuote'
import Layout from './components/layout/Layout';
import NoFound from './pages/NoFound';
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
const App = () => {
  const formData = useSelector(state => state.form)
  useEffect(() => {
    const sendDataHandler = async () => {
      const sendData =  await fetch('https://redux-7e9a1-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body:JSON.stringify(formData),
      });console.log(sendData)
      if(!sendData.ok) {
        alert("Error : Failed to Fetch Link")
      }
    
    
    };sendDataHandler();
  },[formData])
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
