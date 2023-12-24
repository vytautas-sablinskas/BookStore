import { Store, createStore } from 'redux';
import rootReducer from '../reducers';
import { persistStore, persistReducer, Persistor } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store: Store = createStore(persistedReducer);
const persistor: Persistor = persistStore(store);

export { store, persistor };