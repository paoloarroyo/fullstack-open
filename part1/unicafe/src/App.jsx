import { useState } from "react";

const Header = ({ text }) => <h1> {text} </h1>;
const Button = ({ onClick, text }) => (
  <button onClick={onClick}> {text} </button>
);
const Statistics = ({ good, neutral, bad }) => {
  return (
    <div>
      <Header text="Statistics" />
      <p> Good: {good} </p>
      <p> Neutral: {neutral} </p>
      <p> Bad: {bad} </p>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Header text="Give Feedback" />
      <Button onClick={() => setGood(good + 1)} text="Good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button onClick={() => setBad(bad + 1)} text="Bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
