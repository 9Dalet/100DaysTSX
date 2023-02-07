import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import styles from '../../style/RulesStyles';
import {
    useFonts,
    MedievalSharp_400Regular,
} from '@expo-google-fonts/medievalsharp';
import { Almendra_400Regular } from '@expo-google-fonts/almendra';


interface Props {
    title: string
}

const CustomHeader: React.FC<Props> = ({ title }) => {

    let [fontsLoaded] = useFonts({
        MedievalSharp_400Regular,
        Almendra_400Regular,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.header}>
            <Text style={[styles.headerText, {fontFamily: 'MedievalSharp_400Regular'}]}>{title}</Text>
        </View>
    )
}

export default CustomHeader;