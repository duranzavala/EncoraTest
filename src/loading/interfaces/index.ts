interface ILoadingState {
    isVisible: boolean;
}

interface ILoadingObservableResponse {
    name: string;
    open: boolean;
}
export type {
    ILoadingObservableResponse,
    ILoadingState,
};
