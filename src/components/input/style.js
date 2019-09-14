import { StyleSheet } from 'react-native';

import { Colors, Fonts, Metrics } from 'styles';

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    borderColor: Colors.lightgray,
    borderRadius: Metrics.radius.soft,
    borderStyle: 'solid',
    borderWidth: 1,
    flexDirection: 'row',
    height: Metrics.height.regular,
    justifyContent: 'center',
    marginBottom: Metrics.margin.regular,
    paddingLeft: Metrics.padding.big,
    paddingRight: Metrics.padding.regular,
    width: Metrics.max,
  },
  input: {
    flex: 1,
    fontSize: Fonts.big,
  },
  tooltip: {
    backgroundColor: Colors.verylightgray,
    borderRadius: Metrics.radius.soft,
    padding: Metrics.padding.regular,
    position: 'absolute',
    right: 0,
    top: -35,
  },
  tooltipMessage: {
    marginBottom: Metrics.margin.small,
  }
});

export default styles;
