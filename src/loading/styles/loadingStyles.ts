import { StyleSheet } from 'react-native';

import Colors from '@Utils/colors';

export default StyleSheet.create({
    activityIndicator: {
        bottom: 0,
        left: 0,
        opacity: 0.6,
        position: 'absolute',
        right: 0,
        top: 0,
    },
    mainContainer: {
        backgroundColor: Colors.BlackOpacity,
        height: '100%',
        position: 'absolute',
        width: '100%',
        zIndex: 1,
    },
});
