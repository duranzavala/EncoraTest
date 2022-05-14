import React from 'react';

import {
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import Styles from '@Movie/styles/detailMovieStyles';
import NavigationParams from '@Navigation/interfaces';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type IProps = NativeStackScreenProps<NavigationParams, 'DetailsMovie'>;

const DetailMovieComponent:  React.FC<IProps> = ({ navigation, route }) => {
    const movie = route.params;

    const handleOnOpenArticle = (url: string) => () => navigation.navigate('WebView', { url });

    return (
        <ScrollView style={Styles.mainContainer}>
            <Image
                source={{ uri: movie.multimedia.src }}
                style={Styles.moviePreview}
            />
            <View style={Styles.movieInformationContainer}>
                <Text style={Styles.movieTitle}>{movie.displayTitle}</Text>
                <View style={Styles.separator} />
                <Text style={Styles.movieBaseText}>Review: {movie.headline}</Text>
                <View style={Styles.separator} />
                <Text style={Styles.movieBaseText}>by: {movie.byline}</Text>
                <View style={Styles.separator} />
                <Text style={Styles.movieBaseText}>{movie.summaryShort}</Text>
                <View style={Styles.separator} />
                <Text style={Styles.movieBaseText}>Release date: {movie.publicationDate}</Text>
                <View style={Styles.separator} />
                <TouchableOpacity onPress={handleOnOpenArticle(movie.link.url)}>
                    <Text style={[Styles.movieBaseText, Styles.movieLink]}>
                        {movie.link.suggestedLinkText}
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default DetailMovieComponent;
