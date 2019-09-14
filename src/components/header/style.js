import { StyleSheet } from 'react-native';

import { Colors, Metrics, Fonts } from 'styles';

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    flexDirection: 'row',
    height: Metrics.header.height,
    justifyContent: 'flex-start',
    width: Metrics.max,
  },
  hamburguerButton: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: Metrics.header.height,
    paddingVertical: Metrics.padding.regular,
    width: Metrics.header.width,
  },
  hamburguerButtonDash: {
    backgroundColor: Colors.primary,
    borderRadius: Metrics.dash.radius,
    height: Metrics.dash.height,
    width: Metrics.dash.width,
  },
  title: {
    flex: 1,
    fontSize: Fonts.huge,
    fontWeight: 'bold',
    marginRight: Metrics.header.width,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default styles;
