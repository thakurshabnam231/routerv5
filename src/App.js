
import { Route, Switch, Redirect } from 'react-router-dom';
import AllQuotes from './pages/AllQuotes'
import QuoteDetails from './pages/QuoteDetails';
import NewQuote from './pages/NewQuote'
import Layout from './components/layout/Layout';
const App = () => {
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

      </Switch>
    </Layout>
  );
}

export default App;
