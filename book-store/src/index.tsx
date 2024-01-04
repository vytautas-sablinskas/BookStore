import React, { useEffect, useState } from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.sass';
import AppRouter from './app_navigation/AppRouter';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store/index';
import { useDispatch } from 'react-redux';
import { setProducts } from './redux/actions/productsActions';
import productsData from './data/products.json';
import { initializeIcons } from '@fluentui/react/lib/Icons';
import Loading from './shared_components/Loading';

let iconsInitialized = false;

function AppInitializer() : JSX.Element {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  if (!iconsInitialized) {
    initializeIcons();
  }

  useEffect(() => {
    const loadProducts = async () => {
      console.log(productsData.products);
      await dispatch(setProducts(productsData.products));
      setIsLoading(false);
    };

    loadProducts();
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  return <AppRouter />;
}

const root = document.getElementById('root') as HTMLElement;
const appRoot = ReactDOM.createRoot(root);

appRoot.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <AppInitializer />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);