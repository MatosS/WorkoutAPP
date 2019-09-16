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
    exercises: [
      [
        {
          name: 'Rosca Testa Barra Peg Pronada',
          series: 4,
          repetitions: 12,
          rest: 60,
          relatedMuscles: ['Tríceps'],
          techniques: ['Rest n Pause 3x'],
          video: 'https://www.youtube.com/watch?v=orMEOzQjiAs',
          additionalInstructions: '',
        },
        {
          name: 'Rosca Francesa Anilha',
          series: 3,
          repetitions: 10,
          rest: 60,
          relatedMuscles: ['Tríceps'],
          techniques: [],
          video: '',
          additionalInstructions: '',
        },
        {
          name: 'Tríceps Pulley Unilateral Peg Pronada',
          series: 4,
          repetitions: 8,
          rest: 60,
          relatedMuscles: ['Tríceps'],
          techniques: [],
          video: '',
          additionalInstructions: 'Atenção a amplitude!',
        },
        {
          name: 'Oblíquos',
          series: 4,
          repetitions: 12,
          rest: 30,
          relatedMuscles: ['Abdômen'],
          techniques: [],
          video: '',
          additionalInstructions: '',
        },
        {
          name: 'Infra',
          series: 4,
          repetitions: 10,
          rest: 30,
          relatedMuscles: ['Abdômen'],
          techniques: [],
          video: '',
          additionalInstructions: '',
        },
      ],
      [
        {
          name: 'Rosca Martelo Corda Cross',
          series: 4,
          repetitions: 10,
          rest: 60,
          relatedMuscles: ['Bíceps'],
          techniques: [],
          video: '',
          additionalInstructions: '',
        },
        {
          name: 'Rosca Direta Halteres',
          series: 2,
          repetitions: 8,
          rest: 60,
          relatedMuscles: ['Bíceps'],
          techniques: ['Bi-Set'],
          video: '',
          additionalInstructions: '',
        },
        {
          name: 'Rosca Direta Cross',
          series: 2,
          repetitions: 8,
          rest: 60,
          relatedMuscles: ['Bíceps'],
          techniques: ['Bi-Set'],
          video: '',
          additionalInstructions: '',
        },
        {
          name: 'Rosca Scoot Barra ou Barra W',
          series: 4,
          repetitions: 10,
          rest: 60,
          relatedMuscles: ['Bíceps'],
          techniques: [],
          video: '',
          additionalInstructions: '',
        },
        {
          name: 'Gêmeos Sentado Máquina',
          series: 4,
          repetitions: 12,
          rest: 60,
          relatedMuscles: ['Panturrilha'],
          techniques: ['Rest n Pause 3x'],
          video: '',
          additionalInstructions: '',
        },
        {
          name: 'Gêmeos em Pé Máquina',
          series: 4,
          repetitions: 10,
          rest: 60,
          relatedMuscles: ['Panturrilha'],
          techniques: [],
          video: '',
          additionalInstructions: '',
        },
        {
          name: 'Gêmeos em Pé Smith',
          series: 4,
          repetitions: 12,
          rest: 60,
          relatedMuscles: ['Panturrilha'],
          techniques: [],
          video: '',
          additionalInstructions: '',
        },
      ],
      [
        {
          name: 'Rosca Testa Barra Peg Pronada',
          series: 4,
          repetitions: 12,
          rest: 60,
          relatedMuscles: ['Tríceps'],
          techniques: ['Rest n Pause 3x'],
          video: 'https://www.youtube.com/watch?v=orMEOzQjiAs',
          additionalInstructions: '',
        },
        {
          name: 'Rosca Francesa Anilha',
          series: 3,
          repetitions: 10,
          rest: 60,
          relatedMuscles: ['Tríceps'],
          techniques: [],
          video: '',
          additionalInstructions: '',
        },
        {
          name: 'Tríceps Pulley Unilateral Peg Pronada',
          series: 4,
          repetitions: 8,
          rest: 60,
          relatedMuscles: ['Tríceps'],
          techniques: [],
          video: '',
          additionalInstructions: 'Atenção a amplitude!',
        },
        {
          name: 'Oblíquos',
          series: 4,
          repetitions: 12,
          rest: 30,
          relatedMuscles: ['Abdômen'],
          techniques: [],
          video: '',
          additionalInstructions: '',
        },
        {
          name: 'Infra',
          series: 4,
          repetitions: 10,
          rest: 30,
          relatedMuscles: ['Abdômen'],
          techniques: [],
          video: '',
          additionalInstructions: '',
        },
      ],
      [
        {
          name: 'Rosca Martelo Corda Cross',
          series: 4,
          repetitions: 10,
          rest: 60,
          relatedMuscles: ['Bíceps'],
          techniques: [],
          video: '',
          additionalInstructions: '',
        },
        {
          name: 'Rosca Direta Halteres',
          series: 2,
          repetitions: 8,
          rest: 60,
          relatedMuscles: ['Bíceps'],
          techniques: ['Bi-Set'],
          video: '',
          additionalInstructions: '',
        },
        {
          name: 'Rosca Direta Cross',
          series: 2,
          repetitions: 8,
          rest: 60,
          relatedMuscles: ['Bíceps'],
          techniques: ['Bi-Set'],
          video: '',
          additionalInstructions: '',
        },
        {
          name: 'Rosca Scoot Barra ou Barra W',
          series: 4,
          repetitions: 10,
          rest: 60,
          relatedMuscles: ['Bíceps'],
          techniques: [],
          video: '',
          additionalInstructions: '',
        },
        {
          name: 'Gêmeos Sentado Máquina',
          series: 4,
          repetitions: 12,
          rest: 60,
          relatedMuscles: ['Panturrilha'],
          techniques: ['Rest n Pause 3x'],
          video: '',
          additionalInstructions: '',
        },
        {
          name: 'Gêmeos em Pé Máquina',
          series: 4,
          repetitions: 10,
          rest: 60,
          relatedMuscles: ['Panturrilha'],
          techniques: [],
          video: '',
          additionalInstructions: '',
        },
        {
          name: 'Gêmeos em Pé Smith',
          series: 4,
          repetitions: 12,
          rest: 60,
          relatedMuscles: ['Panturrilha'],
          techniques: [],
          video: '',
          additionalInstructions: '',
        },
      ],
      [
        {
          name: 'Rosca Testa Barra Peg Pronada',
          series: 4,
          repetitions: 12,
          rest: 60,
          relatedMuscles: ['Tríceps'],
          techniques: ['Rest n Pause 3x'],
          video: 'https://www.youtube.com/watch?v=orMEOzQjiAs',
          additionalInstructions: '',
        },
        {
          name: 'Rosca Francesa Anilha',
          series: 3,
          repetitions: 10,
          rest: 60,
          relatedMuscles: ['Tríceps'],
          techniques: [],
          video: '',
          additionalInstructions: '',
        },
        {
          name: 'Tríceps Pulley Unilateral Peg Pronada',
          series: 4,
          repetitions: 8,
          rest: 60,
          relatedMuscles: ['Tríceps'],
          techniques: [],
          video: '',
          additionalInstructions: 'Atenção a amplitude!',
        },
        {
          name: 'Oblíquos',
          series: 4,
          repetitions: 12,
          rest: 30,
          relatedMuscles: ['Abdômen'],
          techniques: [],
          video: '',
          additionalInstructions: '',
        },
        {
          name: 'Infra',
          series: 4,
          repetitions: 10,
          rest: 30,
          relatedMuscles: ['Abdômen'],
          techniques: [],
          video: '',
          additionalInstructions: '',
        },
      ],
      [
        {
          name: 'Rosca Martelo Corda Cross',
          series: 4,
          repetitions: 10,
          rest: 60,
          relatedMuscles: ['Bíceps'],
          techniques: [],
          video: '',
          additionalInstructions: '',
        },
        {
          name: 'Rosca Direta Halteres',
          series: 2,
          repetitions: 8,
          rest: 60,
          relatedMuscles: ['Bíceps'],
          techniques: ['Bi-Set'],
          video: '',
          additionalInstructions: '',
        },
        {
          name: 'Rosca Direta Cross',
          series: 2,
          repetitions: 8,
          rest: 60,
          relatedMuscles: ['Bíceps'],
          techniques: ['Bi-Set'],
          video: '',
          additionalInstructions: '',
        },
        {
          name: 'Rosca Scoot Barra ou Barra W',
          series: 4,
          repetitions: 10,
          rest: 60,
          relatedMuscles: ['Bíceps'],
          techniques: [],
          video: '',
          additionalInstructions: '',
        },
        {
          name: 'Gêmeos Sentado Máquina',
          series: 4,
          repetitions: 12,
          rest: 60,
          relatedMuscles: ['Panturrilha'],
          techniques: ['Rest n Pause 3x'],
          video: '',
          additionalInstructions: '',
        },
        {
          name: 'Gêmeos em Pé Máquina',
          series: 4,
          repetitions: 10,
          rest: 60,
          relatedMuscles: ['Panturrilha'],
          techniques: [],
          video: '',
          additionalInstructions: '',
        },
        {
          name: 'Gêmeos em Pé Smith',
          series: 4,
          repetitions: 12,
          rest: 60,
          relatedMuscles: ['Panturrilha'],
          techniques: [],
          video: '',
          additionalInstructions: '',
        },
      ],
    ],
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
