import styled from 'styled-components';
import Workout from '../types/Workout';
import { PrimaryHeading, SecondaryHeading } from '../components/Heading';

const RoundContainer = styled.div`
  margin: 20px 0 0 0;
`;

type WorkoutOverviewProps = {
  workout: Workout,
};

const ExerciseStats = (workout: Workout) => workout.roundList.map((round) => (
  <RoundContainer>
    <SecondaryHeading>{round.exercise.name}</SecondaryHeading>
    {`${round.sets.length} x ${round.sets[0]}`}
  </RoundContainer>
));

const WorkoutOverview = ({ workout }: WorkoutOverviewProps) => (
  <div>
    <PrimaryHeading>{workout.name}</PrimaryHeading>
    {ExerciseStats(workout)}
  </div>
);

export default WorkoutOverview;
