import React from 'react';

import WebView from 'react-native-webview';

import NavigationParams from '@Navigation/interfaces';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type IProps = NativeStackScreenProps<NavigationParams, 'WebView'>;

const WebViewComponent: React.FC<IProps> = ({ route }) => {
    const { url } = route.params;

    return <WebView source={{ uri: url }} />;
};

export default WebViewComponent;
