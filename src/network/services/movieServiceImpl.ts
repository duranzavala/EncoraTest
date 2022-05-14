import { API_KEY, BASE_API } from '@env';
import { PromiseReject, PromiseResolve } from '@Interfaces/index';
import { IMovie } from '@Movie/interfaces/IMovie';
import IMovieDTO from '@Network/DTOs/movieDTO';
import IMovieService, {
    IFetchMovieListError,
    IFetchMovieListResponse,
} from '@Network/interfaces/movieService';
import NetworkService, { RESPONSE_STATUS } from '@Network/interfaces/networkService';
import { PATHS } from '@Utils/constants';
import Strings from '@Utils/strings';

export default class MovieServiceImplementation implements IMovieService {
    networkService: NetworkService;

    constructor(networkService: NetworkService) {
        this.networkService = networkService;
    }

    fetchMovies(): Promise<IFetchMovieListResponse> {
        return new Promise(async (resolve: PromiseResolve<IFetchMovieListResponse>, reject: PromiseReject<IFetchMovieListError>) => {
            try {
                const moviesResponse: any = await this.networkService.get(
                    `${PATHS.MOVIES}?api-key=${API_KEY}`,
                    {baseUrl: BASE_API},
                );

                if (!moviesResponse) throw `${Strings.FetchMoviesListError}`;

                const movies = (moviesResponse.results as any[]).map(this.mapMovie);

                resolve({
                    movies,
                    success: true,
                    status: RESPONSE_STATUS.SUCCESS,
                    code: 200,
                });
            } catch (error) {
                reject({
                    success: false,
                    status: RESPONSE_STATUS.ERROR,
                    code: 400,
                })
            }
        });
    };

    mapMovie = (movie: IMovieDTO): IMovie => ({
        displayTitle: movie.display_title,
        mpaaRating: movie.mpaa_rating,
        criticsPick: movie.critics_pick,
        byline: movie.byline,
        headline: movie.headline,
        summaryShort: movie.summary_short,
        publicationDate: movie.publication_date,
        openingDate: movie.opening_date,
        dateUpdated: movie.date_updated,
        link: {
            type: movie.link.type,
            url: movie.link.url,
            suggestedLinkText: movie.link.suggested_link_text,
        },
        multimedia: {
            type: movie.multimedia.type,
            src: movie.multimedia.src,
            height: movie.multimedia.height,
            width: movie.multimedia.width,
        },
    });
}