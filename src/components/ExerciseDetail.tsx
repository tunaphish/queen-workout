import { PrimaryHeading } from './Heading';
import Round from '../types/Round';

type ExerciseDetailProps = {
  round: Round;
};

const ExerciseDetail = ({ round }: ExerciseDetailProps) => (
  <div>
    <PrimaryHeading>{round.exercise.name}</PrimaryHeading>
  </div>
);

export default ExerciseDetail;
