import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from '../../style/InfoStyles';
import {
    useFonts,
    MedievalSharp_400Regular,
  } from '@expo-google-fonts/medievalsharp';
  import { Almendra_400Regular } from '@expo-google-fonts/almendra';

interface Props {
    onPress: any,
    image: any,
    name: string
}

const BlackCard: React.FC<Props> = ({ onPress, image, name }) => {

    let [fontsLoaded] = useFonts({
        MedievalSharp_400Regular,
        Almendra_400Regular,
      });
      
      if (!fontsLoaded) {
        return null;
      }

    return (
        <TouchableOpacity
            style={styles.blackCard}
            onPress={onPress}>
            <View style={styles.blackCardImageView}>
                <Image
                    source={image}
                    style={styles.blackCardImage} />
            </View>
            <View style={styles.blackCardTextView}>
                <Text style={[styles.blackCardText, {fontFamily: 'MedievalSharp_400Regular'}]}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default BlackCard;