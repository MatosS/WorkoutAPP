import { StyleSheet } from 'react-native';

import { Metrics, Colors, Fonts } from 'styles';

const styles = StyleSheet.create({
  main: {
    alignItems: 'flex-start',
    backgroundColor: Colors.white,
    minHeight: Metrics.max,
    padding: Metrics.padding.big*2,
    position: 'absolute',
    top: Metrics.header.height,
    width: Metrics.max,
  },
  menuRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Metrics.max,
  },
  menuItem: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderColor: Colors.lightgray,
    borderRadius: Metrics.radius.regular,
    borderWidth: 1,
    height: Metrics.height.big,
    justifyContent: 'center',
    width: Metrics.width.big,
  },
  menuItemText: {
    color: Colors.gray,
    fontSize: Fonts.big,
    fontWeight: 'bold',
    marginTop: Metrics.margin.small,
    textTransform: 'uppercase',
  },
});

export default styles;
