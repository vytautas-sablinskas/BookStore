import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Products from '../product_list/Products';
import Header from '../shared/Header';
import ProductDetails from '../product_details/ProductDetails';
import PageNotFound from '../shared/PageNotFound';
import ShoppingCart from '../shopping_cart/ShoppingCart';
import Paths from './Paths';
import Checkout from '../checkout/Checkout';

function AppRouter() : JSX.Element {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={Paths.Products} element={<Products/>} />
        <Route path={Paths.ProductDetails} element={<ProductDetails/>} />
        <Route path={Paths.ShoppingCart} element={<ShoppingCart/>} />
        <Route path={Paths.Checkout} element={<Checkout/>} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;