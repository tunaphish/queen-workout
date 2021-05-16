import Workout from '../types/Workout';
import Round from '../types/Round';

import HipThrust from './exercises/HipThrust';

const roundOne: Round = {
    exercise: HipThrust,
    sets: [30,30,30,30],
}

const WorkoutDayOne: Workout = {
    name: "Booty Day 1",
    roundList: [roundOne],
}

export default WorkoutDayOne;