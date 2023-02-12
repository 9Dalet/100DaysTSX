import React from 'react';
import { Dimensions, PixelRatio, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#232930',
    },
    generalView: {
        marginTop: 10,
        backgroundColor: '#151515',
        padding: 15,
        marginHorizontal: 12,
        borderRadius: 10,
        flex: 1,
    },
    scroll: {
        marginBottom: 62,
        flex: 1
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width /2,
        alignItems: 'center'
    },
    center: {
        alignItems: 'center',
        marginTop: 15
    },
    centralizer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    description: {
        marginTop: 20,
        backgroundColor: '#191919',
        padding: 15,
        marginHorizontal: 12,
        borderRadius: 10,
    },
    descriptionText: {
        color: '#e3dac9',
        fontSize: 18,
    },
    image: {
        resizeMode: 'contain',
        height: width > 380 ? PixelRatio.roundToNearestPixel(300) : PixelRatio.roundToNearestPixel(250),
        width: '100%'
    },
    CaselleCard: {
        width: '100%',
        backgroundColor: 'rgba(34,35,40,0.5)',
        borderRadius: 10,
        justifyContent: 'center',
        padding: 10,
        alignSelf: 'center',
    },
    caselleText: {
        color: '#e3dac9',
        fontSize: 22,
        textAlign: 'center',
        //fontWeight: 'bold',
    },
    textcard: {
        color: '#e3dac9',
        fontSize: width > 380 ? PixelRatio.roundToNearestPixel(18) : PixelRatio.roundToNearestPixel(17),
        //fontWeight: 'bold',
        textAlign: 'center',
    },
    textView: {
        width: '100%',
        backgroundColor: '#000000c0',
    },
    titleText: {
        borderBottomWidth: 2,
        borderRadius: 50,
        borderBottomColor: '#232930',
        marginBottom: 10,
    },
    rowContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    innerCard: {
        height: width > 380 ? 100 : 90,
        width: width > 380 ? 100 : 90,
        backgroundColor: '#333',
        borderRadius: 10,
    },
    CaselleCardImage: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
    },
    innerCardImageView: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    header: {
        height: 84,
        backgroundColor: '#151515',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    headerText: {
        color: '#e3dac9',
        fontSize: 36,
        //fontWeight: 'bold',
        marginTop: 24,
    },
    divider: {
        borderWidth: 1,
        borderColor: '#232930',
        borderRadius: 50,
        marginVertical: 15,
    },
    introView: {
        paddingVertical: 10,
        paddingHorizontal: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    introTextView: {
        justifyContent: 'center',
    },
    introText1: {
        color: '#e3dac9',
        fontSize: width > 380 ? PixelRatio.roundToNearestPixel(30) : PixelRatio.roundToNearestPixel(27),
        marginBottom: 5,
         textAlign: 'center'
    },
    introText2: {
        color: '#e3dac9',
        fontSize: PixelRatio.roundToNearestPixel(18),
        alignSelf: 'center',
    },
    introImage: {
        height: width > 380 ? PixelRatio.roundToNearestPixel(100) : PixelRatio.roundToNearestPixel(90),
        width: width > 380 ? PixelRatio.roundToNearestPixel(100) : PixelRatio.roundToNearestPixel(90), 
        alignSelf: 'center',
        //backgroundColor: 'red',
    },
    largeCard: {
        width: '100%',
        backgroundColor: 'rgba(34,35,40,0.5)',
        borderRadius: 10,
        justifyContent: 'center',
        padding: 10,
        alignSelf: 'center'
    },
    text: {
        color: '#e3dac9',
        fontSize: width > 380 ? PixelRatio.roundToNearestPixel(18) : PixelRatio.roundToNearestPixel(16),
    },
    largeCardNameView: {
        borderBottomWidth: 2,
        borderRadius: 50,
        borderBottomColor: '#232930',
        marginBottom: 10
    },
    largeCardName: {
        color: '#e3dac9',
        fontSize: width > 380 ? PixelRatio.roundToNearestPixel(26) : PixelRatio.roundToNearestPixel(22),
        textAlign: 'center',
        //fontWeight: 'bold',
    },
    largeCardContentView: {
        flex: 1,
        justifyContent: 'center'
    },
    pressableButton: {
        width: '100%',
        height: 20,
        justifyContent: 'center',
        marginBottom: 10
    },
    containerView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    bar: {
        width: 100,
        borderRadius: 50,
        borderBottomWidth: 5,
        borderBottomColor: '#e3dac9',
    },
    smallCard: {
        width: '80%',
        backgroundColor: 'rgba(34,35,40,0.5)',
        borderRadius: 10,
        justifyContent: 'center',
        padding: 10,
    },
    smallCardText: {
        color: '#e3dac9',
        fontSize: width > 380 ? PixelRatio.roundToNearestPixel(18) : PixelRatio.roundToNearestPixel(15),
        alignSelf: 'center',
    },
    smallCardNameText: {
        color: '#e3dac9',
        fontSize: width > 380 ? PixelRatio.roundToNearestPixel(22) : PixelRatio.roundToNearestPixel(20),
        alignSelf: 'center',
        textAlign: 'center',
        //fontWeight: 'bold',
    }
});

export default styles;