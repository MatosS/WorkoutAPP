import { YellowBox } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from 'pages/login';
import Workouts from 'pages/workouts';
import WorkoutDetail from 'pages/workoutDetail';

import { mapNavParamsToProps } from 'utils';

YellowBox.ignoreWarnings([
  'UIManager[\'getConstants\']',
]);

const MainNavigator = createSwitchNavigator(
  {
    Login: { screen: Login },
    Workouts: { screen: Workouts },
    WorkoutDetail: { screen: mapNavParamsToProps(WorkoutDetail) },
  },
  {
    initialRouteName: 'Workouts',
  },
);

const App = createAppContainer(MainNavigator);

export default App;
