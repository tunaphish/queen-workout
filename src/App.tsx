import 'antd/dist/antd.css';
import './index.css';
import { Layout } from 'antd';
import Home from './components/Home'

const { Header, Content } = Layout;



const App = () => {
  return (
    <div >
    <Layout className="layout">
      <Header className="header-title">QUEEN WORKOUT</Header>
      <Content>
        <div className="site-layout-content">
            <Home/>
        </div>
      </Content>
    </Layout>
    </div>
  );
}

export default App;
