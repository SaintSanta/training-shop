import React from 'react';
import { useEffect } from 'react';
import { useLocation, Route, Switch } from 'react-router-dom';

import { Header } from '../header';
import { MainPage } from '../../pages/main-page';
import { ProductsPage } from '../../pages/products-page';
import { ProductPage } from '../../pages/product-page';
import { Footer } from '../footer';

import './app.scss';

export const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className='app' data-test-id='app'>
      <Header />
      <Switch>
        <Route exact path='/'>
          <MainPage />
        </Route>
        <Route exact path='/women'>
          <ProductsPage productType='women' />
        </Route>
        <Route exact path='/men'>
          <ProductsPage productType='men' />
        </Route>
        <Route path='/women/:id'>
          <ProductPage productType='women' />
        </Route>
        <Route path='/men/:id'>
          <ProductPage productType='men' />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};
