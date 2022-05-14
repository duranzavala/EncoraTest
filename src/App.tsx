import React from 'react';

import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';

import LoadingComponent from '@Loading/container/loadingContainer';
import Navigation from '@Navigation/index';
import { store } from '@Store/index';

const App: React.FC = () => (
    <SafeAreaView style={styles.mainContainer}>
        <Provider store={store}>
            <Navigation />
            <LoadingComponent />
        </Provider>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
});
export default App;
