import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Card } from 'components';

import { Colors } from 'styles';

import styles from './style';

const Exercise = ({
  exercise: {
    name = '',
    series = 0,
    repetitions = 0,
    rest = 0,
    relatedMuscles = [],
    techniques = [],
    video = '',
    additionalInstructions = '',
  } = {},
}) => {

  const renderRelatedMuscles = () => {
    if (!!relatedMuscles.length) {
      return (
        <Text style={styles.relatedMuscles}>{relatedMuscles.join(', ')}</Text>
      );
    }

    return null;
  }

  const renderTechniques = () => {
    if (!!techniques.length) {
      return (
        <Text style={styles.technique}>{techniques.join(', ')}</Text>
      );
    }

    return null;
  }

  const renderYoutubeIcon = () => {
    if (!!video) {
      return (
        <TouchableOpacity onPress={() => Linking.openURL(video)}>
          <Icon
            name="youtube-square"
            size={50}
            color={Colors.primary}
          />
        </TouchableOpacity>
      );
    }

    return null;
  }

  const renderAdditionalInstructions = () => {
    if (!!additionalInstructions) {
      return <Text style={styles.additionalInstructions}>{`* ${additionalInstructions}`}</Text>
    }

    return null;
  }

  return (
    <Card style={styles.main}>
      <View style={styles.infoSection}>
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.infoSection}>
        <View>
          <Text style={styles.series}>{series} x {repetitions}</Text>
          <Text style={styles.rest}>{`Descanso ${rest}s`}</Text>
          {renderTechniques()}
          {renderRelatedMuscles()}
        </View>
        {renderYoutubeIcon()}
      </View>
      <View style={styles.infoSection}>
        {renderAdditionalInstructions()}
      </View>
    </Card>
  );
}

export default Exercise;
