import {  Button, Space } from 'antd';

import WorkoutList from '../data/WorkoutList'

const WorkoutButtons = WorkoutList.map((workout) => {
    return (
        <Button key={workout.name}>{workout.name}</Button>
    )
})

const Home = () => {
    return (
        <Space direction="vertical" align="center">
            {WorkoutButtons}
        </Space>
    );
}
  
export default Home;