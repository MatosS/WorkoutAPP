import { StyleSheet } from 'react-native';

import { Fonts, Metrics, Colors } from 'styles';

const styles = StyleSheet.create({
  main: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  name: {
    flex: 1,
    fontSize: Fonts.huge,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  infoSection: {
    alignSelf: 'stretch',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dash: {
    borderWidth: 1,
    borderColor: Colors.lightgray,
    marginVertical: Metrics.margin.small,
    width: 10,
  },
  series: {
    color: Colors.gray,
    fontSize: Fonts.big,
    fontWeight: 'bold',
  },
  rest: {
    color: Colors.gray,
    fontSize: Fonts.big,
    fontWeight: 'bold',
  },
  technique: {
    color: Colors.gray,
    fontSize: Fonts.big,
    fontWeight: 'bold',
  },
  relatedMuscles: {
    color: Colors.gray,
    fontSize: Fonts.big,
    fontWeight: 'bold',
  },
  additionalInstructions: {
    color: Colors.gray,
    fontSize: Fonts.regular,
    fontWeight: 'bold',
    marginTop: Metrics.margin.regular,
    textAlign: 'center',
  },
});

export default styles;
