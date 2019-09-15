import React, { useState } from 'react';

import { Page } from 'components';

import SwitchDay from './components/switchDay'
import Exercise from './components/exercise'

import styles from './style';

const WorkoutDetail = ({ workout }) => {
  const [currentDay, setCurrentDay] = useState(0);

  const renderExercises = () => {
    const exercises = workout.exercises[currentDay] || [];

    return exercises.map((exercise, i) =>
      <Exercise key={i} exercise={exercise} />
    );
  };

  return (
    <Page
      style={styles.main}
      showHeader
      title={`Treino de ${workout.title}`}
    >
      <SwitchDay days={workout.days} currentDay={currentDay} setCurrentDay={setCurrentDay}/>
      {renderExercises()}
    </Page>
  );
}

export default WorkoutDetail;
