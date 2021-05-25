import styled from 'styled-components';
import { Link } from 'react-router-dom';
import WorkoutList from '../data/WorkoutList';
import { PrimaryHeading } from '../components/Heading';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Workout = styled.img`
  width: 580px;
  height: 257px;
  object-fit: cover;
`;

const WorkoutButtons = WorkoutList.map((workout, index) => (
  <Link to={`/workout/${index}`} key={workout.name}>
    <Workout key={workout.name} alt={workout.name} src={process.env.PUBLIC_URL + workout.image} />
  </Link>
));

const Home = () => (
  <>
    <PrimaryHeading>Workouts</PrimaryHeading>
    <Container>
      {WorkoutButtons}
    </Container>
  </>

);

export default Home;
