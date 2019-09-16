import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Colors } from 'styles';

import styles from './style';

const Input = ({
  type = 'general',
  tooltip = '',
  styleContainer = {},
  styleInput = {},
  onFocus = () => {},
  ...props
}) => {
  const [ showTooltip, setShowTooltip ] = useState(false);
  const [ tooltipTimeout, setTooltipTimeout ] = useState(null);

  const tooltipDismissDelay = 5000;

  const specificProps = {
    textarea: {
      multiline: true,
      numberOfLines: 10,
    },
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

  const handleOnFocus = () => {
    setShowTooltip(false);
    onFocus();
  }

  return (
    <View style={[styles.main, styleContainer]}>
      <TextInput style={[styles.input, styleInput]} onFocus={handleOnFocus} {...props} {...specificProps[type]} />
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
        <TouchableOpacity style={styles.tooltip} onPress={() => setShowTooltip(!showTooltip)}>
          <Text>{tooltip}</Text>
        </TouchableOpacity>
      }
    </View>
  );
}

export default Input;
