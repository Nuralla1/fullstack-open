import { useState } from "react";
import Button from "./components/Button";
import Statistics from "./components/Statistics";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  return (
    <div className="App">
      <h2>give feedback</h2>
      <Button text="good" onClick={setGood} />
      <Button text="neutral" onClick={setNeutral} />
      <Button text="bad" onClick={setBad} />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;
