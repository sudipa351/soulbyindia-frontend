import { useEffect } from 'react';
import './App.css';
import HomePage from './containers/HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductListPage from './containers/ProductListPage';

import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn, updateCart } from './actions';
import ProductDetailsPage from './containers/ProductDetailsPage';
import CartPage from './containers/CartPage';

import OrderPage from './containers/OrderPage';
import OrderDetailsPage from './containers/OrderDetailsPage';
import Footer from './components/Footer';
import PortFolio from './components/Portfolio';
import CheckOutPage from './containers/CheckOutPage';
import { ThankYou } from './components/Thankyou';


function App() {
const dispatch = useDispatch();
const auth = useSelector(state => state.auth);


  useEffect(() => {

    if(!auth.authenticate){
      dispatch(isUserLoggedIn())
    }

  }, [auth.authenticate])


  useEffect(() => {
    
    console.log("App.js - updateCart");
    dispatch(updateCart());
  }, [auth.authenticate]);



  return (
    <div className="App">

<Router>
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/portfolio" exact component={PortFolio} />
    <Route path="/thank"  component={ThankYou} />
    <Route path="/cart"  component={CartPage} />
    <Route path="/checkout"  component={CheckOutPage} />
    <Route path="/account/orders" component={OrderPage} />
    <Route path="/order_details/:orderId" component={OrderDetailsPage} />
    <Route path="/:productSlug/:productId/p" component={ProductDetailsPage} />
    <Route path="/:slug" component={ProductListPage} />
 
   
  </Switch>
</Router>


    </div>
  );
}

export default App;
