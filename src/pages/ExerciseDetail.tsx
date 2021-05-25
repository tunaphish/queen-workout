import styled from 'styled-components';
import { PrimaryHeading } from '../components/Heading';
import Round from '../types/Round';

const Container = styled.div`
  margin: 10px;
`;
const Video = styled.video`
  width: 100%;
  height: 100%;
`;

type ExerciseDetailProps = {
  round: Round;
};

const ExerciseDetail = ({ round }: ExerciseDetailProps) => (
  <Container>
    <PrimaryHeading>{round.exercise.name}</PrimaryHeading>
    <Video autoPlay muted loop playsInline>
      <source src={process.env.PUBLIC_URL + round.exercise.video} type="video/mp4" />
    </Video>
  </Container>
);

export default ExerciseDetail;
