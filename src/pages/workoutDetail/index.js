import React from 'react';

import { Page } from 'components';

import styles from './style';

const WorkoutDetail = ({ workout }) => {
  return (
    <Page
      style={styles.main}
      showHeader
      title={`Treino de ${workout.title}`}
    >

    </Page>
  );
}

export default WorkoutDetail;
