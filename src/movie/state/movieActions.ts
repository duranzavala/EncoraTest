import { createAction } from 'typesafe-actions';

import MovieActionsTypes from '@Movie/state/movieActionsTypes';

const actionFetchMovies = createAction(MovieActionsTypes.REQUEST_FETCH_MOVIES)();

export { actionFetchMovies };
