import { StyleSheet } from 'react-native';

import { Fonts, Metrics, Colors } from 'styles';

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
  },
  title: {
    flex: 1,
    fontSize: Fonts.big,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  typeList: {
    flexDirection: 'row',
  },
  type: {
    fontSize: Fonts.big,
    marginLeft: Metrics.margin.small,
  },
  days: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    marginTop: Metrics.margin.regular,
  },
  day: {
    backgroundColor: Colors.lightgray,
    borderRadius: Metrics.radius.circle,
    fontWeight: 'bold',
    height: Metrics.height.small,
    marginRight: Metrics.margin.small,
    textAlignVertical: 'center',
    textAlign: 'center',
    textTransform: 'uppercase',
    width: Metrics.width.small,
  }
});

export default styles;
