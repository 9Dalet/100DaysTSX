import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';

import styles from '../../style/RulesStyles';

interface Props {
  onPress: any
}

const ModalDivider: React.FC<Props> = ({onPress}) => {
  return (
    <Pressable
      style={styles.pressableButton}
      onPress={onPress}>
      <View style={styles.containerView}>
        <View style={styles.bar}></View>
      </View>
    </Pressable>
  );
};

export default ModalDivider;

