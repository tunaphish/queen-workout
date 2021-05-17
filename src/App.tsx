import 'antd/dist/antd.css';
import './index.css';
import { Layout, Button, Space } from 'antd';

const { Header, Content } = Layout;

const App = () => {
  return (
    <div >
    <Layout className="layout">
      <Header className="header-title">QUEEN WORKOUT</Header>
      <Content>
        <div className="site-layout-content">
          <Space direction="vertical" align="center">
            <Button type="primary">Booty Workout Day 1</Button>
            <Button type="primary" disabled>Booty Workout Day 2</Button>
          </Space>
        </div>
      </Content>
    </Layout>
    </div>
  );
}

export default App;
