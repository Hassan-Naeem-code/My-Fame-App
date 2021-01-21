import rootReducer from './reducers/index';
import {createStore, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage'
// import storage from 'redux-persist/lib/storage';

const enhancer = compose(applyMiddleware(thunk));

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


let store = createStore(persistedReducer,enhancer);
export let persistor = persistStore(store);
// export default () => {
//   return {store, persistor};
// };

// const store = createStore(rootReducer, {}, applyMiddleware(thunk));

export default store;
