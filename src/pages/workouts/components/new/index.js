import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Card } from 'components';

import { Colors } from 'styles';

import styles from './style';

const New = () => {
  return (
    <Card style={styles.main} onPress={() => {}}>
      <Icon
        name="plus"
        size={30}
        color={Colors.gray}
      />
      <Text style={styles.text}>Solicitar novo treino</Text>
    </Card>
  );
}

export default New;
