import styled from 'styled-components';
import { PrimaryHeading } from '../components/Heading';
import Round from '../types/Round';

const Video = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
`;

type ExerciseDetailProps = {
  round: Round;
};

const ExerciseDetail = ({ round }: ExerciseDetailProps) => (
  <div>
    <PrimaryHeading>{round.exercise.name}</PrimaryHeading>
    <Video autoPlay muted loop>
      <source src={process.env.PUBLIC_URL + round.exercise.video} type="video/mp4" />
    </Video>
  </div>
);

export default ExerciseDetail;
