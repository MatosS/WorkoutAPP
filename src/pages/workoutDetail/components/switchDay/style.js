import { StyleSheet } from 'react-native';

import { Fonts, Metrics, Colors } from 'styles';

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    borderColor: Colors.verylightgray,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: Metrics.padding.regular,
  },
  day: {
    alignItems: 'center',
    backgroundColor: Colors.lightgray,
    borderRadius: Metrics.radius.circle,
    height: Metrics.height.small,
    justifyContent: 'center',
    marginHorizontal: Metrics.margin.regular,
    width: Metrics.width.small,
  },
  dayText: {
    color: Colors.white,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  currentDay: {
    backgroundColor: Colors.gray,
    height: Metrics.height.regular,
    width: Metrics.width.regular,
  },
  currentDayText: {
    fontSize: Fonts.huge,
  },
});

export default styles;
