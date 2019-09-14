import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';

import { Colors } from 'styles';

import styles from './style';

const Button = ({
  text = '',
  upperCase = false,
  styleType = 'primary',
  loading = false,
  ...props,
}) => {
  if (upperCase) {
    text = text.toUpperCase();
  }

  return (
    <TouchableOpacity
      style={[
        styles.main,
        styles[styleType],
      ]}
      disabled={loading}
      activeOpacity={0.6}
      {...props}
      >
      {
        loading
        ? <ActivityIndicator size="large" color={Colors.white} />
        : <Text style={styles[`${styleType}Text`]}>{text}</Text>
      }
    </TouchableOpacity>
  );
}

export default Button;
