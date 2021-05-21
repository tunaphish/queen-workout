import Workout from '../types/Workout';

type WorkoutOverviewProps = {
  workout: Workout,
};

const WorkoutOverview = ({ workout }: WorkoutOverviewProps) => {
  const ExerciseStats = workout.roundList.map((round) => {
    const setSchema: string = `Sets: ${round.sets.length} Reps: ${round.sets[0]}`;
    return (
      <div>
        {setSchema}
      </div>
    );
  });

  return (
    <div>
      {ExerciseStats}
    </div>
  );
};

export default WorkoutOverview;
