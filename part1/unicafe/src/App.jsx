import { useState } from "react";

const Header = ({ text }) => <h1> {text} </h1>;
const Button = ({ onClick, text }) => (
  <button onClick={onClick}> {text} </button>
);
const Statistics = ({ good, neutral, bad }) => {
  const average = (good - bad) / 3;
  const all = good + bad + neutral;
  const positive = (good / all) * 100;
  return (
    <div>
      <p> Good: {good} </p>
      <p> Neutral: {neutral} </p>
      <p> Bad: {bad} </p>
      <p> All: {all}</p>
      <p> Average: {average}</p>
      <p> Positive: {positive}%</p>
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
      <Header text="Statistics" />
      {good > 0 || bad > 0 || neutral > 0 ? (
        <Statistics good={good} neutral={neutral} bad={bad} />
      ) : (
        <p>No Feedback Given</p>
      )}
    </div>
  );
};

export default App;
