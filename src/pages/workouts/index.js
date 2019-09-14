import React from 'react';

import { Page } from 'components';
import Summary from './components/summary';
import New from './components/new';

import styles from './style';

const workouts = [
  {
    title: 'Hipertrofia',
    types: 'ABCDEF',
    days: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  },
  {
    title: 'Hipertrofia',
    types: 'ABC',
    days: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  },
  {
    title: 'RML',
    types: 'ABC',
    days: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  },
  {
    title: 'Hipertrofia',
    types: 'ABCDEF',
    days: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  },
  {
    title: 'Força',
    types: 'ABCD',
    days: ['Seg', 'Ter', 'Qua', 'Qui'],
  },
];

const Workouts = ({ navigation }) => {

  const renderWorkouts = () => {
    const handleWorkoutPress = (workout) => {
      console.log('handleWorkoutPress');
      navigation.navigate('WorkoutDetail', { workout })
    }

    return workouts.map((workout, i) => <Summary key={i} workout={workout} onPress={handleWorkoutPress} />)
  };


  return (
    <Page
      style={styles.main}
      showHeader
      title="Treinos"
    >
      <New />
      {renderWorkouts()}
    </Page>
  );
}

export default Workouts;
