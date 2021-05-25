import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import Workout from '../types/Workout';
import { PrimaryHeading, SecondaryHeading } from '../components/Heading';

import WorkoutList from '../data/WorkoutList';

const RoundContainer = styled.div`
  margin: 20px 0 0 0;
`;

const ExerciseStats = (workout: Workout) => workout.roundList.map((round) => (
  <RoundContainer key={round.exercise.name}>
    <SecondaryHeading>{round.exercise.name}</SecondaryHeading>
    {`${round.sets.length} x ${round.sets[0]}`}
  </RoundContainer>
));

const WorkoutOverview = () => {
  const { workoutid }: any = useParams();
  const workout: Workout = WorkoutList[workoutid];

  return (
    <div>
      <PrimaryHeading>{workout.name}</PrimaryHeading>
      {ExerciseStats(workout)}
      <Link to={`/workout/${workoutid}/round/0/set/0`}>START</Link>
    </div>
  );
};

export default WorkoutOverview;
