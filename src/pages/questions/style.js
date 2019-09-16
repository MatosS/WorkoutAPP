import { StyleSheet } from 'react-native';

import { Metrics, Fonts, Colors } from 'styles';

const styles = StyleSheet.create({
  main: {

  },
  form: {
    padding: Metrics.padding.big,
    paddingBottom: 0,
  },
  questionInputContainer: {
    height: Metrics.height.big,
    paddingVertical: Metrics.padding.regular,
  },
  questionInput: {
    textAlign: 'left',
    textAlignVertical: 'top',
  },
  historyTitle: {
    fontSize: Fonts.big,
    fontWeight: 'bold',
    marginTop: Metrics.margin.big,
    textAlign: 'center',
  },
  question: {
    textAlign: 'justify',
  },
  answer: {
    textAlign: 'justify',
  },
  dash: {
    borderWidth: 1,
    borderColor: Colors.gray,
    marginVertical: Metrics.margin.regular,
    width: 10,
  },
  suggestionImage: {
    height: Metrics.youtubeThumb.height,
    width: Metrics.youtubeThumb.width,
  },
  suggestionTitle: {
    fontSize: Fonts.big,
    fontWeight: 'bold',
    margin: Metrics.margin.regular,
  },
  suggestionTip: {
    marginHorizontal: Metrics.margin.regular,
  },
  loading: {
    alignItems: 'center',
  }
});

export default styles;
