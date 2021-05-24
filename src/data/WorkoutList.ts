import Workout from '../types/Workout';
import Round from '../types/Round';

import { HipThrust } from './Exercises';

const roundOne: Round = {
  exercise: HipThrust,
  sets: [30, 30, 30, 30],
};

const roundTwo: Round = {
  exercise: HipThrust,
  sets: [5, 5],
};

const WorkoutList: Workout[] = [
  {
    name: 'Booty Day 1',
    roundList: [roundOne, roundTwo],
    image: '/images/wireframe.jpg',
  },
  {
    name: 'Booty Day 2',
    roundList: [roundOne],
    image: '/images/wireframe.jpg',
  },
  {
    name: 'Booty Day 2',
    roundList: [roundOne],
    image: '/images/wireframe.jpg',
  },
  {
    name: 'Booty Day 2',
    roundList: [roundOne],
    image: '/images/wireframe.jpg',
  },
  {
    name: 'Booty Day 2',
    roundList: [roundOne],
    image: '/images/wireframe.jpg',
  },
  {
    name: 'Booty Day 2',
    roundList: [roundOne],
    image: '/images/wireframe.jpg',
  },
];

export default WorkoutList;
