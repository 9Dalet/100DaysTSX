import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import styles from '../../style/TimerStyles';

interface Props {
  onPress: any,
  text: string
}

const TimerButton: React.FC<Props> = ({onPress, text}) => {
  return(
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}



export default TimerButton