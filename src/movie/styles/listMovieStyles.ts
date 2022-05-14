import { StyleSheet } from 'react-native';

import Colors from '@Utils/colors';
import { hp, wp } from '@Utils/screenPixels';

export default StyleSheet.create({
    movieContainer: {
        flexDirection: 'row',
        backgroundColor: Colors.White,
    },
    movieInformationContainer: {
        flex: 1,
        paddingEnd: wp('1%'),
        paddingStart: wp('5%'),
        paddingVertical: hp('0.5%'),
    },
    moviePreview: {
        height: '100%',
        marginTop: hp('0.5%'),
        width: '40%',
    },
    movieReleaseDate: {
        fontSize: wp('3%'),
        marginTop: hp('0.5%'),
        color: Colors.Gray,
    },
    movieReview: {
        fontSize: wp('4%'),
        marginTop: hp('1%'),
    },
    movieTitle: {
        fontSize: wp('4.5%'),
        fontWeight: 'bold',
    },
})