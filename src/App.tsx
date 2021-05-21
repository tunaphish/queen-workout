import './index.css';
import styled from 'styled-components';
import Home from './components/Home';

const Header = styled.header`
  background-color: red;
  min-height: 64px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const HomeLink = styled.a`
  color: white;
  margin: 10px;
`;

const RegularLink = styled.a`
  color: white;
  margin: 10px;
`;

const App = () => (
  <div>
    <Header>
      <HomeLink>QUEEN WORKOUT</HomeLink>
      <RegularLink>Test Link</RegularLink>
    </Header>
    <div>
      <Home />
    </div>
  </div>
);

export default App;
