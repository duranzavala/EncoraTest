import IMovieService from '@Network/interfaces/movieService';

interface EpicDependencies {
    moviesService: IMovieService,
}

interface BaseRequestAction<T> {
    type: string,
    payload: T,
};

type PromiseResolve<T> = ((result: T) => void);
type PromiseReject<T> = ((reason: T) => void);

export type {
    BaseRequestAction,
    EpicDependencies,
    PromiseReject,
    PromiseResolve,
};
