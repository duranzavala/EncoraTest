import {
    applyMiddleware,
    compose,
    createStore,
} from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import { EpicDependencies } from '@Interfaces/index';
import MovieServiceImplementation from '@Network/services/movieServiceImpl';
import NetworkAxiosService from '@Network/services/networkService';
import { rootEpic, rootReducer } from '@Store/modules/root';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
  }
}

const networkAxiosService: NetworkAxiosService = NetworkAxiosService.getInstance();
const movieServiceImpl = new MovieServiceImplementation(networkAxiosService);

const dependencies: EpicDependencies = {
  moviesService: movieServiceImpl,
};

const epicMiddleware = createEpicMiddleware({ dependencies });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(epicMiddleware))
  );
  epicMiddleware.run(rootEpic);
  return store;
};

const store = configureStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
