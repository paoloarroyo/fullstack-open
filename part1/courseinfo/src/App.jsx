const Header = ({ course }) => <h1> {course} </h1>;

const Part = ({ part }) => (
  <p>
    {part.title} {part.exercises}
  </p>
);

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <Part key={part.title} part={part} />
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
  const course = {
    name: "Half Stack application development",
    parts: [
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
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
