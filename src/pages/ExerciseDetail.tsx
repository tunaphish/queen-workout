import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { PrimaryHeading } from '../components/Heading';

import Workout from '../types/Workout';
import Round from '../types/Round';

import WorkoutList from '../data/WorkoutList';

const Container = styled.div`
  margin: 10px;
`;
const Video = styled.video`
  width: 100%;
  height: 100%;
`;

const ExerciseDetail = () => {
  let { workoutid, roundid, setid }: any = useParams();
  workoutid = parseInt(workoutid, 10);
  roundid = parseInt(roundid, 10);
  setid = parseInt(setid, 10);

  const workout: Workout = WorkoutList[workoutid];
  const round: Round = workout.roundList[roundid];

  let nextScreenUrl = '/reward';

  if (workout.roundList.length - 1 === roundid
    && workout.roundList[roundid].sets.length - 1 === setid) {
    // do nothing
  } else if (workout.roundList[roundid].sets.length - 1 === setid) {
    nextScreenUrl = `/workout/${workoutid}/round/${roundid + 1}/set/0`;
  } else {
    nextScreenUrl = `/workout/${workoutid}/round/${roundid}/set/${setid + 1}`;
  }

  return (
    <Container>
      <PrimaryHeading>{round.exercise.name}</PrimaryHeading>
      <Video autoPlay muted loop playsInline>
        <source src={process.env.PUBLIC_URL + round.exercise.video} type="video/mp4" />
      </Video>
      <Link to={nextScreenUrl}>NEXT</Link>

    </Container>
  );
};

export default ExerciseDetail;
