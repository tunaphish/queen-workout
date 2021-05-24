import './index.css';
import styled from 'styled-components';
import Header from './components/Header';

// import Home from './components/Home';
// import WorkoutOverview from './components/WorkoutOverview';
import ExerciseDetail from './components/ExerciseDetail';

import workoutList from './data/WorkoutList';

const Content = styled.div`
  margin: 50px 10px 10px 0;
  display: flex;
  justify-content: space-around;
`;

const Container = styled.div`
  max-width: 1200px;
`;

const App = () => (
  <>
    <Header />
    <Content>
      <Container>
        <ExerciseDetail round={workoutList[0].roundList[0]} />
      </Container>
    </Content>
  </>
);

export default App;
