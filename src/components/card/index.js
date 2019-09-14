import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import { Colors } from 'styles';

import styles from './style';

const Card = ({
  children,
  onPress,
  style = {},
}) => {

  const CardContainer = (props) => {
    if (onPress) {
      return <TouchableOpacity {...props} onPress={onPress} />
    }

    return <View {...props} />
  }

  return (
    <CardContainer style={[styles.main, style]}>
      {children}
    </CardContainer>
  )
}

export default Card;
