import { StyleSheet } from 'react-native';

import { Colors, Metrics, Fonts } from 'styles';

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    borderRadius: Metrics.radius.soft,
    fontSize: Fonts.big,
    height: Metrics.height.regular,
    justifyContent: 'center',
    marginBottom: Metrics.margin.regular,
    width: Metrics.max,
  },
  primary: {
    backgroundColor: Colors.button.primary,
  },
  primaryText: {
    color: Colors.text.primary,
    fontWeight: 'bold',
  },
});

export default styles;
