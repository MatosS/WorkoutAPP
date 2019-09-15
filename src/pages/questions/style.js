import { StyleSheet } from 'react-native';

import { Metrics } from 'styles';
import Colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: Metrics.padding.huge,
  },
  logo: {
    margin: Metrics.margin.huge*2,
  }
});

export default styles;
