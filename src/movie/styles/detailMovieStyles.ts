import { StyleSheet } from 'react-native';

import Colors from '@Utils/colors';
import { hp, wp } from '@Utils/screenPixels';

export default StyleSheet.create({
    mainContainer: {
        backgroundColor: Colors.White,
        flex: 1,
    },
    movieBaseText: {
        fontSize: wp('4%'),
        marginTop: hp('2%'),
    },
    movieInformationContainer: {
        flex: 1,
        paddingEnd: wp('1%'),
        paddingStart: wp('5%'),
        paddingVertical: hp('0.5%'),
    },
    movieLink: {
        color: 'blue',
    },
    moviePreview: {
        height: hp('25%'),
        width: '100%',
    },
    movieTitle: {
        fontSize: wp('4.5%'),
        fontWeight: 'bold',
        marginTop: hp('1%'),
    },
    separator: {
        backgroundColor: Colors.Gray,
        height: hp('0.05%'),
        marginTop: hp('1%'),
        width: '100%',
    },
})