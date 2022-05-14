import { IMovie } from '@Movie/interfaces/IMovie';
import { IBaseServerResponse } from '@Network/interfaces/networkService';

interface IFetchMovieListResponse extends IBaseServerResponse {
    movies: IMovie[];
}

interface IFetchMovieListError extends IBaseServerResponse {}

export type {
    IFetchMovieListError,
    IFetchMovieListResponse,
};

export default interface IMovieService {
    fetchMovies: () => Promise<IFetchMovieListResponse>;
}
