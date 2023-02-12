import React from 'react';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#232930',
    },
    scrollView: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 62,
        paddingTop: 30,
    },
    card: {
        width: 350,
        height: 200,
        margin: 5,
        backgroundColor: '#e3dac9',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        borderRadius: 5,
        alignItems: 'center',
    },
    animatedImage: {
        height: 170,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 1)',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    cardText: {
        color: '#000',
        //fontWeight: 'bold',
        fontSize: 26,
    },
    scroll: {
        marginBottom: 62
    },
    padding: {
        padding: 10
    },
    textContainer: {
        backgroundColor: '#151515',
        padding: 10,
        borderRadius: 10,
    },
    loreText: {
        color: '#e3dac9',
        fontSize: 18,
        textAlign: 'center',
    },
    detailContainer: {
        flex: 1,
        backgroundColor: '#151515',
        paddingTop: Constants.statusBarHeight,
    },
    image: {
        width: '100%',
        height: 600,
        resizeMode: 'center'
    },
    button: {
        height: 41,
        width: 41,
        marginTop: 22,
        position: 'absolute',
        zIndex: 1,
        left: 10,
        top: 15,
        borderRadius: 20,
    },
    animatedView: {
        flex: 1,
        paddingVertical: 20,
        marginBottom: 62
    },
    pictureClicker: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        flex: 1,
    },
    characterImage: {
        height: 200,
        width: 150
    },
    flexer: {
        flex: 1
    },
    punchline: {
        backgroundColor: '#151515',
        marginLeft: 20,
        borderRadius: 10,
        padding: 10,
        justifyContent: 'center',
    },
    punchlineText: {
        color: '#e3dac9',
        textAlign: 'center',
        //fontWeight: 'bold',
        fontSize: 18,
    },
    descriptionText: {
        color: '#e3dac9',
        fontSize: 38,
        textAlign: 'center',
        //fontWeight: 'bold',
    },
    characterLoreView: {
        backgroundColor: '#151515',
        marginHorizontal: 10,
        marginTop: 10,
        borderRadius: 10,
        padding: 20,
        justifyContent: 'center',
    },
    characterLoreText: {
        color: '#e3dac9',
        fontSize: 20,
    },
    blackCard: {
        height: 200,
        width: 180,
        backgroundColor: '#151515',
        margin: 10,
        alignItems: 'center',
        borderRadius: 2,
        shadowColor: "#000",
        elevation: 5,
    },
    blackCardImageView: {
        borderWidth: 2,
        borderColor: '#e3dac9',
        margin: 10,
        width: 150,
        height: 140
    },
    blackCardImage: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover'
    },
    blackCardTextView: {
        height: 40,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 5,
        paddingHorizontal: 10,
        marginBottom: 5
    },
    blackCardText: {
        color: '#e3dac9',
        //fontWeight: 'bold',
        fontSize: 19,
        textAlign: 'center'
    },
    header: {
        height: 84,
        backgroundColor: '#151515',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        paddingHorizontal: 5,
        //marginBottom: 10
    },
    headerText: {
        color: '#e3dac9',
        fontSize: 34,
        //fontWeight: 'bold',
        marginTop: 22,
    },
    headerBackButton: {
        position: 'absolute',
        zIndex:1,
        left: 5,
        top: 32
    },
    headerTextView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default styles;