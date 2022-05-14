import React from 'react';

import WebViewComponent from '@Components/webView/webViewComponent';
import DetailMovieComponent from '@Movie/containers/detailMovieComponent';
import ListMovieComponent from '@Movie/containers/listMovieComponent';
import NavigationParams from '@Navigation/interfaces/index';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS } from '@Utils/constants';
import Strings from '@Utils/strings';

const MovieNavigatior = createNativeStackNavigator<NavigationParams>();

const Navigation = () => (
    <NavigationContainer>
        <MovieNavigatior.Navigator initialRouteName={SCREENS.LIST_MOVIES}>
            <MovieNavigatior.Screen
                name={SCREENS.LIST_MOVIES}
                component={ListMovieComponent}
                options={{ headerTitle: Strings.MoviesListTitle }}
            />
            <MovieNavigatior.Screen
                name={SCREENS.DETAILS_MOVIE}
                component={DetailMovieComponent}
                options={{ headerTitle: Strings.Empty }}
            />
            <MovieNavigatior.Screen
                name={SCREENS.WEB_VIEW}
                component={WebViewComponent}
                options={{ headerTitle: Strings.Empty }}
            />
        </MovieNavigatior.Navigator>
    </NavigationContainer>
);

export default Navigation;
