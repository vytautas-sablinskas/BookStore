import React, { useEffect } from 'react';
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

let iconsInitialized = false;

function AppInitializer() : JSX.Element {
  const dispatch = useDispatch();
  
  if (!iconsInitialized) {
    initializeIcons();
    iconsInitialized = true;
  }

  useEffect(() => {
    dispatch(setProducts(productsData.products));
  }, [dispatch]);

  return <AppRouter />;
}

const root = document.getElementById('root') as HTMLElement;
const appRoot = ReactDOM.createRoot(root);

appRoot.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppInitializer />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);