import { StyleSheet } from 'react-native';

import { Fonts, Metrics, Colors } from 'styles';

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: Fonts.big,
    fontWeight: 'bold',
    marginTop: Metrics.margin.regular,
    textTransform: 'uppercase',
  },
});

export default styles;
