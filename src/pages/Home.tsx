import styled from 'styled-components';
import WorkoutList from '../data/WorkoutList';
import { PrimaryHeading } from '../components/Heading';

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
    <PrimaryHeading>Workouts</PrimaryHeading>
    <Container>
      {WorkoutButtons}
    </Container>
  </>

);

export default Home;
