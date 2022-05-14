import React, {
    useEffect,
    useState,
} from 'react';

import { ActivityIndicator, View } from 'react-native';

import { ILoadingObservableResponse } from '@Loading/interfaces/index';
import LoadingObservable from '@Loading/observables/loadingObservable';
import Styles from '@Loading/styles/loadingStyles';
import Colors from '@Utils/colors';

const LoadingComponent: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const subscription = LoadingObservable.subscribe((state: ILoadingObservableResponse) => {
            setIsLoading(state.open);
        });
        return () => {
            subscription.unsubscribe();
        };
    }, []);

    return isLoading ? (
        <View style={Styles.mainContainer}>
            <ActivityIndicator
                animating={isLoading}
                size='large'
                color={Colors.Secondary}
                style={Styles.activityIndicator}
            />
        </View>
    ) : null;
};

export default LoadingComponent;