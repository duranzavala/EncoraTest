import { ActionType, createReducer } from 'typesafe-actions';

import { ILoadingState } from '@Loading/interfaces';
import * as loadingActions from '@Loading/state/loadingActions';

type ActionsType = ActionType<typeof loadingActions>;

export const initialState: ILoadingState = {
    isVisible: false,
};

const loadingReducer = createReducer<ILoadingState, ActionsType>(initialState)
    .handleAction(loadingActions.actionLoadingHide, (): ILoadingState => ({
        isVisible: false,
    }));

export default loadingReducer;
