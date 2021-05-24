import Workout from '../types/Workout';
import Round from '../types/Round';

import * as Exercise from './Exercises';

const bootyDayOneRounds: Round[] = [
  {
    exercise: Exercise.HipThrust,
    sets: [30, 30, 30],
  },
  {
    exercise: Exercise.FrogPumps,
    sets: [30, 30, 30],
  },
  {
    exercise: Exercise.SquatWithCalfRaise,
    sets: [16, 16, 16],
  },
  {
    exercise: Exercise.KneeUpStepBackLunges,
    sets: [12, 12, 12],
  },
  {
    exercise: Exercise.StaticGluteBridgeActivation,
    sets: [20, 20, 20],
  },
  {
    exercise: Exercise.DbAroundTheWorldLunges,
    sets: [10, 10, 10],
  },
  {
    exercise: Exercise.BandedHipAbductors,
    sets: [30, 30, 30],
  },
  {
    exercise: Exercise.CalfRaises,
    sets: [60],
  },
];

const WorkoutList: Workout[] = [
  {
    name: 'Booty Day 1',
    roundList: bootyDayOneRounds,
    image: '/images/wireframe.jpg',
  },
  {
    name: 'Booty Day 2',
    roundList: bootyDayOneRounds,
    image: '/images/wireframe.jpg',
  },
  {
    name: 'Booty Day 2',
    roundList: bootyDayOneRounds,
    image: '/images/wireframe.jpg',
  },
  {
    name: 'Booty Day 2',
    roundList: bootyDayOneRounds,
    image: '/images/wireframe.jpg',
  },
  {
    name: 'Booty Day 2',
    roundList: bootyDayOneRounds,
    image: '/images/wireframe.jpg',
  },
  {
    name: 'Booty Day 2',
    roundList: bootyDayOneRounds,
    image: '/images/wireframe.jpg',
  },
];

export default WorkoutList;
