import './index.css';
import styled from 'styled-components';
import Home from './components/Home';
import Phish from './components/Phish';

const Header = styled.header`
  background: rgb(239,121,138);
  background: linear-gradient(90deg, rgba(239,121,138,1) 0%, rgba(247,169,168,1) 50%, rgba(229,195,209,1) 100%);
  min-height: 64px;


  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const CenteredItem = styled.div`
  color: white;
`;

const Content = styled.div`
  margin: 50px 10px 10px 0;
  display: flex;
  justify-content: space-around;
  > * {
    max-width: 2048px;
  }
`;

const App = () => (
  <div>
    <Header>
      <CenteredItem>
        <Phish />
      </CenteredItem>
    </Header>
    <Content>
      <Home />
    </Content>
  </div>
);

export default App;
