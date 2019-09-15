import React from 'react';
import { View, Animated, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Metrics, Colors } from 'styles';

import styles from './style';

const Menu = ({
  style,
  onPress,
}) => {
  return (
    <Animated.View style={[styles.main, style]}>
      <View style={styles.menuRow}>
        <TouchableOpacity style={styles.menuItem} onPress={() => onPress('Workouts')}>
          <Icon
            name="heartbeat"
            size={Metrics.menu.icon}
            color={Colors.gray}
          />
          <Text style={styles.menuItemText}>Treinos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => onPress('Questions')}>
          <Icon
            name="question-circle"
            size={Metrics.menu.icon}
            color={Colors.gray}
          />
          <Text style={styles.menuItemText}>Dúvidas</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}

export default Menu;
