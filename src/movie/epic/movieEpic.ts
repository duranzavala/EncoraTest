import { ofType } from 'redux-observable';
import {
    catchError,
    from,
    map,
    of,
} from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { EpicDependencies } from '@Interfaces/index';
import { actionLoadingHide } from '@Loading/state/loadingActions';
import listMoviesObservable from '@Movie/observables/listMoviesObservable';
import MovieActionsTypes from '@Movie/state/movieActionsTypes';

const fetchMoviesEpic = (action$: any, _: any, { moviesService }: EpicDependencies) =>
    action$.pipe(
        ofType(MovieActionsTypes.REQUEST_FETCH_MOVIES),
        switchMap(() => from(moviesService.fetchMovies())
            .pipe(
                map(({ movies }) => {
                    listMoviesObservable.onNext({ movies });
                    return actionLoadingHide();
                }),
                catchError((error) => {
                    console.error(error);
                    return of(actionLoadingHide());
                }),
            ),
        ),
    );

export default [fetchMoviesEpic];
