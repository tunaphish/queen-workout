import WorkoutList from '../data/WorkoutList';

const WorkoutButtons = WorkoutList.map((workout) => (
  <div key={workout.name}>{workout.name}</div>
));

const Home = () => (
  <>
    {WorkoutButtons}
  </>
);

export default Home;
