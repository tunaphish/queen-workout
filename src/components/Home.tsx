import styled from 'styled-components';
import WorkoutList from '../data/WorkoutList';
import Heading from './Heading';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Workout = styled.img`
  max-width: 640px;
`;

const WorkoutButtons = WorkoutList.map((workout) => (
  <Workout key={workout.name} alt={workout.name} src={process.env.PUBLIC_URL + workout.image} />
));

const Home = () => (
  <>
    <Heading>Workouts</Heading>
    <Container>
      {WorkoutButtons}
    </Container>
  </>

);

export default Home;
