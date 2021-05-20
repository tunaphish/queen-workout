import Workout from '../types/Workout';
import Round from '../types/Round';

import { HipThrust } from './Exercises';

const roundOne: Round = {
  exercise: HipThrust,
  sets: [30, 30, 30, 30],
};

const WorkoutList: Workout[] = [
  {
    name: 'Booty Day 1',
    roundList: [roundOne],
  },
  {
    name: 'Booty Day 1',
    roundList: [roundOne],
  },
];

export default WorkoutList;
