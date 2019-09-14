import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Colors } from 'styles';

import styles from './style';

const Input = ({
  type = 'general',
  tooltip = '',
  ...props
}) => {
  const [ showTooltip, setShowTooltip ] = useState(false);
  const [ tooltipTimeout, setTooltipTimeout ] = useState(null);

  const tooltipDismissDelay = 5000;

  const specificProps = {
    email: {
      autoCompleteType: 'email',
      keyboardType: 'email-address',
      textContentType: 'emailAddress',
    },
    password: {
      secureTextEntry: true,
    },
    general: {
      autoCompleteType: 'off',
      textContentType: 'none',
    },
  };

  useEffect(() => {
    if (tooltipTimeout) {
      clearTimeout(tooltipTimeout);
    }
    if (showTooltip) {
      setTooltipTimeout(setTimeout(() => setShowTooltip(false), tooltipDismissDelay));
    }
  }, [showTooltip]);

  return (
    <View style={styles.main}>
      <TextInput style={styles.input} {...props} {...specificProps[type]} />
      {
        !!tooltip &&
        <TouchableOpacity
          onPress={() => setShowTooltip(!showTooltip)}
          >
          <Icon
            name="exclamation-circle"
            size={25}
            color={Colors.tooltip.primary}
          />
        </TouchableOpacity>
      }
      {
        showTooltip &&
        <View style={styles.tooltip}>
          <Text>{tooltip}</Text>
          {/* {tooltip.map((msg, i) => <Text key={i} style={styles.tooltipMessage}>{msg}</Text>)} */}
        </View>
      }
    </View>
  );
}

export default Input;
