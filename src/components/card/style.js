import { StyleSheet } from 'react-native';

import { Colors, Metrics } from 'styles';

const styles = StyleSheet.create({
  main: {
    alignSelf: 'stretch',
    alignItems: 'flex-start',
    backgroundColor: Colors.white,
    borderColor: Colors.lightgray,
    borderRadius: Metrics.radius.soft,
    borderWidth: 1,
    justifyContent: 'center',
    marginVertical: Metrics.margin.regular,
    marginHorizontal: Metrics.margin.big,
    padding: Metrics.padding.big,
  },
});

export default styles;
