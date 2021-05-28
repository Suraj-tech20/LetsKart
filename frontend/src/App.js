import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="grid-container">
          <header className="row">
            <div>
              <a className="brand" href="/">LetsKart</a>
            </div>
            <div>
              <a href="cart.html">cart</a>
              <a href="signin.html">Sign in</a>
            </div>
          </header>
          <main>
            <Route exact path='/' component={HomeScreen}></Route>
            <Route exact path="/product/:id" component={ProductScreen}></Route>
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
