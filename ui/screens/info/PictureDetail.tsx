import React from 'react';
import { SafeAreaView, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { Zoom } from 'react-native-reanimated-zoom';
import { Ionicons } from '@expo/vector-icons';

import styles from '../../style/InfoStyles';
const PictureDetail = ({ navigation, route }: any) => {

    const { image } = route.params;

    return (
        <SafeAreaView style={styles.detailContainer}>
            <StatusBar style="light" />
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.goBack()}>
                <Ionicons name="ios-chevron-back" size={40} color="white" />
            </TouchableOpacity>
            <Zoom style={{ flex: 1, justifyContent: 'center', }}>
                <Image source={image} style={styles.image} />
            </Zoom>
        </SafeAreaView>
    )
};

export default PictureDetail;
