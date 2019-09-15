import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './style';

const SwitchDay = ({ days = [], currentDay, setCurrentDay }) => {
  const renderDays = () => {
    return days.map((day, i) => {
      const current = currentDay === i ? styles.currentDay : {};
      const currentText = currentDay === i ? styles.currentDayText : {};

      return (
        <TouchableOpacity key={i} style={[styles.day, current]} onPress={() => setCurrentDay(i)}>
          <Text style={[styles.dayText, currentText]}>{day}</Text>
        </TouchableOpacity>
      );
    });
  }

  return (
    <View style={styles.main}>
      {renderDays()}
    </View>
  );
}

export default SwitchDay;
