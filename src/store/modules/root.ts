import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

import loadingEpic from '@Loading/epic/loadingEpic';
import LoadingReducer from '@Loading/state/loadingReducer';
import movieEpic from '@Movie/epic/movieEpic';

export const rootEpic = combineEpics(
    ...loadingEpic,
    ...movieEpic,
);

export const rootReducer = combineReducers({
    LoadingReducer,
});