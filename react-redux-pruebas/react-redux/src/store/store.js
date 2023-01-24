import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { postsReducer } from '../reducers/posts_reducers'

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig,postsReducer,window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());
/*
let store = createStore(
    postsReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__())
*/


//export default store;


  /*let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
  )*/
  export default () => {
    let store = createStore(persistedReducer)
    let persistor = persistStore(store)
    /*let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
    )*/
    return { store, persistor }
  }