import { useState } from "react";

const Header = ({ title }) => <h1> {title} </h1>;
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;
const Anecdote = ({ anecdote, votes }) => (
  <>
    <p> {anecdote} </p>
    <p> Has {votes} votes </p>
  </>
);

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  const [winner, setWinner] = useState(null);

  const addVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    const topVotes = Math.max(...newVotes);
    setVotes(newVotes);
    setWinner(anecdotes[newVotes.indexOf(topVotes)]);
    console.log(topVotes);
  };

  const nextAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  return (
    <div>
      <Header title="Anecdote of the Day" />
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
      <Button onClick={addVote} text="Vote" />
      <Button onClick={nextAnecdote} text="Next Anecdote" />
      <Header title="Anecdote with the Most Votes" />
      {winner ? (
        <Anecdote anecdote={winner} votes={votes[anecdotes.indexOf(winner)]} />
      ) : (
        <p> No votes have been submitted </p>
      )}
    </div>
  );
};

export default App;
