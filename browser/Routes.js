import React from 'react';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';
import Root from './components/Root';
import Home from './components/Home';
import Products from './components/Products';
import CustomOrder from './components/CustomOrder';
import About from './components/About';
import Contact from './components/Contact';
import payWithStripe from './components/checkOutWithStripe';
import confirmation from './components/confirmationPage';
import errorPayment from './components/paymentError';
import loadingConfirmation from './components/loadingConfirmation';


const Routes = () => (
  <Router history={hashHistory}>
    <Route path="/" component={Root}>
      <Route path="home" component={Home} />
      <Route path="products" component={Products} />
      <Route path="customorder" component={CustomOrder} />
      <Route path="about" component={About} />
      <Route path="contact" component={Contact} />
      <Route path="pay" component={payWithStripe} />
      <Route path="confirmation" component={confirmation} />
      <Route path="paymenterror" component={errorPayment} />
      <Route path="loadingconfirmation" component={loadingConfirmation} />
      
    </Route>
  </Router>
);


export default Routes;
