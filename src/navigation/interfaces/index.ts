import { IMovie } from '@Movie/interfaces/IMovie';

type NavigationParams = {
    ListMovies: undefined;
    DetailsMovie: IMovie;
    WebView: { url: string };
};

export default NavigationParams;
