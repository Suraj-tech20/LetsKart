import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { signout } from './actions/userActions';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import OrderScreen from './screens/OrderScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductScreen from './screens/ProductScreen';
import registerScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SigninScreen from './screens/SigninScreen';

function App() {
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  }
  return (
    <>
      <BrowserRouter>
        <div className="grid-container">
          <header className="row">
            <div>
              <Link className="brand" to="/">LetsKart</Link>
            </div>
            <div>
              <Link to="/cart">Cart
                {cartItems.length > 0 && (<span className="badge">{cartItems.length}</span>)}
              </Link>
              {
                userInfo ? (
                  <div className="dropdown">
                    <Link to="#">{userInfo.name}<i className="fa fa-caret-down"></i></Link>
                    <ul className="dropdown-content">
                      <Link to="#signout" onClick={signoutHandler}>Sign Out</Link>
                    </ul>
                  </div>
                ) : (<Link to="/signin">Sign in</Link>
                )}
            </div>
          </header>
          <main>
            <Route exact path="/cart/:id?" component={CartScreen}></Route>
            <Route exact path="/signin" component={SigninScreen}></Route>
            <Route exact path="/register" component={registerScreen}></Route>
            <Route exact path="/product/:id" component={ProductScreen}></Route>
            <Route exact path="/shipping" component={ShippingAddressScreen}></Route>
            <Route exact path="/payment" component={PaymentMethodScreen}></Route>
            <Route exact path="/placeorder" component={PlaceOrderScreen}></Route>
            <Route exact path="/order/:id" component={OrderScreen}></Route>
            <Route exact path="/" component={HomeScreen}></Route>
          </main>
          <footer className="row center">
            All right reserved
          </footer>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
