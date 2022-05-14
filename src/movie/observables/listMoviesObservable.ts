import { Subject } from 'rxjs';

import { IMovie } from '@Movie/interfaces/IMovie';

export interface IFetchMoviesResponse {
    movies: IMovie[];
}

const ListMoviesObservable = () => {
    const subject = new Subject();

    const onNext = (moviesList: IFetchMoviesResponse) => {
        subject.next(moviesList);
    };

    const subscribe = (process: any) => subject.subscribe(process);

    return {
        onNext,
        subscribe,
    };
};

export default ListMoviesObservable();
