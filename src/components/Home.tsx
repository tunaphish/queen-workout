import { Button, Space } from 'antd';

import WorkoutList from '../data/WorkoutList';

const WorkoutButtons = WorkoutList.map((workout) => (
  <Button key={workout.name}>{workout.name}</Button>
));

const Home = () => (
  <Space direction="vertical" align="center">
    {WorkoutButtons}
  </Space>
);

export default Home;
