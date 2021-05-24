import styled from 'styled-components';
import WorkoutList from '../data/WorkoutList';

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const Workout = styled.img`
  max-width: 640px;
`;

const WorkoutButtons = WorkoutList.map((workout) => (
  <Workout key={workout.name} alt={workout.name} src={process.env.PUBLIC_URL + workout.image} />
));

const Home = () => (
  <Container>
    {WorkoutButtons}
  </Container>
);

export default Home;
