import React from 'react';
import { View, Text } from 'react-native';

import { Card } from 'components';

import styles from './style';

const Summary = ({
  workout = {},
  onPress = () => {},
}) => {
  const {
    title = '',
    types = '',
    days = [],
  } = workout;

  return (
    <Card onPress={() => onPress(workout)}>
      <View style={styles.main}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.typeList}>
          {types.split('').map(t => <Text key={t} style={styles.type}>{t}</Text>)}
        </View>
      </View>
      <View style={styles.days}>
        {days.map(day => <Text key={day} style={styles.day}>{day}</Text>)}
      </View>
    </Card>
  );
}

export default Summary;
