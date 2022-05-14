import { ofType } from 'redux-observable';
import { EMPTY } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import LoadingService from '@Loading/observables/loadingObservable';
import LoadingActionsTypes from '@Loading/state/loadingActionsTypes';
import MovieActionsTypes from '@Movie/state/movieActionsTypes';

const startLoadingEpic = (action$: any) =>
    action$.pipe(
        ofType(MovieActionsTypes.REQUEST_FETCH_MOVIES),
        mergeMap(() => {
            LoadingService.show();
            return EMPTY;
        }),
    );

const endLoadingEpic = (action$: any) =>
    action$.pipe(
        ofType(LoadingActionsTypes.LOADING_HIDE),
        mergeMap(() => {
            LoadingService.hide();
            return EMPTY;
        }),
    );

export default [
    startLoadingEpic,
    endLoadingEpic,
];