import './index.css';
import styled from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';

import Home from './pages/Home';
import WorkoutOverview from './pages/WorkoutOverview';
import ExerciseDetail from './pages/ExerciseDetail';
import Reward from './pages/Reward';

const Content = styled.div`
  margin: 50px 10px 10px 0;
  display: flex;
  justify-content: space-around;
`;

const Container = styled.div`
  max-width: 1200px;
`;

const App = () => (
  <BrowserRouter>
    <Header />
    <Content>
      <Container>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/workout/:workoutid/round/:roundid/set/:setid" component={ExerciseDetail} />
          <Route path="/workout/:workoutid" component={WorkoutOverview} />
          <Route path="/reward" component={Reward} />

          <Route render={() => <h1>404: page not found</h1>} />
        </Switch>
      </Container>
    </Content>
  </BrowserRouter>
);

export default App;
