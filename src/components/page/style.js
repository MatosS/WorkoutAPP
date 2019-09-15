import { StyleSheet, StatusBar, Dimensions } from 'react-native';

import { Metrics, Colors, Fonts } from 'styles';

const styles = StyleSheet.create({
  main: {
    backgroundColor: Colors.white,
    height: Dimensions.get('window').height - StatusBar.currentHeight,
    marginTop: StatusBar.currentHeight,
  },
  content: {
    backgroundColor: Colors.white,
    flexDirection: 'column',
    height: Dimensions.get('window').height - Metrics.header.height - StatusBar.currentHeight,
    position: 'absolute',
    top: Metrics.header.height,
    width: Metrics.max,
  },
  scrollview: {
    backgroundColor: Colors.white,
    flexDirection: 'column',
  },
});

export default styles;
