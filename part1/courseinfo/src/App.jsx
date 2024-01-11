const Header = ({ course }) => <h1> {course} </h1>;
const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <p key={part.title}>
          {part.title} {part.exercises}
        </p>
      ))}
    </>
  );
};
const Total = ({ parts }) => {
  const exercises = parts.map((part) => part.exercises);
  const total = exercises.reduce((a, b) => a + b);
  return <p> Number of Exercises: {total} </p>;
};

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      title: "Fundamentals of React",
      exercises: 10,
    },
    {
      title: "Using Props to Pass Data",
      exercises: 7,
    },
    {
      title: "State of a Component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
