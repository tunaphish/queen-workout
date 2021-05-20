import { Statistic, Space } from 'antd';
import Workout from '../types/Workout';

type WorkoutOverviewProps = {
  workout: Workout,
};

const WorkoutOverview = ({ workout }: WorkoutOverviewProps) => {
  const ExerciseStats = workout.roundList.map((round) => {
    const setSchema: string = `Sets: ${round.sets.length} Reps: ${round.sets[0]}`;
    return (<Statistic title={setSchema} value={round.exercise.name} />);
  });

  return (
    <Space direction="vertical" align="center">
      {ExerciseStats}
    </Space>
  );
};

export default WorkoutOverview;
