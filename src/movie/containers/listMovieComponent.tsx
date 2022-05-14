import React, {
    useEffect,
    useState,
} from 'react';

import {
    FlatList,
    Image,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { useDispatch } from 'react-redux';

import { IMovie } from '@Movie/interfaces/IMovie';
import ListMoviesObservable, {
    IFetchMoviesResponse,
} from '@Movie/observables/listMoviesObservable';
import { actionFetchMovies } from '@Movie/state/movieActions';
import Styles from '@Movie/styles/listMovieStyles';
import NavigationParams from '@Navigation/interfaces';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SCREENS } from '@Utils/constants';

type IProps = NativeStackScreenProps<NavigationParams, 'ListMovies'>;

const ListMovieComponent: React.FC<IProps> = ({ navigation }) => {
    const dispatch = useDispatch();

    const [moviesList, setMoviesList] = useState<IMovie[]>([]);

    useEffect(() => {
        dispatch(actionFetchMovies());
    }, []);

    useEffect(() => {
        const listMoviesObservable = ListMoviesObservable.subscribe(({ movies }: IFetchMoviesResponse) => {
            setMoviesList(movies);
        });
        return () => {
            listMoviesObservable.unsubscribe();
        }
    }, []);

    const handleOnPressMovie = (movie: IMovie) => () => navigation.navigate(SCREENS.DETAILS_MOVIE, movie);

    const renderMovie = ({ item: movie }: { item: IMovie }) => (
        <TouchableOpacity
            style={Styles.movieContainer}
            onPress={handleOnPressMovie(movie)}
        >
            <Image
                resizeMode='stretch'
                style={Styles.moviePreview}
                source={{ uri: movie.multimedia.src }}
            />
            <View style={Styles.movieInformationContainer}>
                <Text style={Styles.movieTitle}>{movie.displayTitle}</Text>
                <Text style={Styles.movieReview}>Review: {movie.headline}</Text>
                <Text style={Styles.movieReleaseDate}>Release date: {movie.publicationDate}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <FlatList
            data={moviesList}
            renderItem={renderMovie}
            keyExtractor={(_, index) => index.toString()}
        />
    );
};

export default ListMovieComponent;
