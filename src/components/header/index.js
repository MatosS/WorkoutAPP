import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated, Easing } from 'react-native';

import styles from './style';

const Header = ({ style, title, onPress }) => {

  const renderHamburguerButton = () => {
    return (
      <TouchableOpacity style={styles.hamburguerButton} onPress={onPress}>
        <Animated.View style={[styles.hamburguerButtonDash, style.hamburguerButtonTopDashStyle]} />
        <Animated.View style={[styles.hamburguerButtonDash, style.hamburguerButtonMiddleDashStyle]} />
        <Animated.View style={[styles.hamburguerButtonDash, style.hamburguerButtonBottomDashStyle]} />
      </TouchableOpacity>
    );
  };

  const renderPageTitle = () => {
    return (
      <Animated.Text style={[styles.title, style.titleStyle]}>{title}</Animated.Text>
    );
  };

  return (
    <View style={styles.main}>
      {renderHamburguerButton()}
      {renderPageTitle()}
    </View>
  );
}

export default Header;
