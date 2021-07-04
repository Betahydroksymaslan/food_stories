import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from 'reducers';
import thunk from 'redux-thunk';
import notificationsMiddleware from 'middlewares/notificationsMiddleware';


const configureStore = (preloadedState) => {
  const middlewares = [thunk, notificationsMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];
  const composeEnhancers = composeWithDevTools(...enhancers);
  const store = createStore(rootReducer, preloadedState, composeEnhancers);

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('reducers', () => store.replaceReducer(rootReducer));
  }

  return store;
};

export default configureStore;
