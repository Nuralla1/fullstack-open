import React from "react";
import StatisticksLine from "./StatisticksLine";

const Statistics = ({ good, neutral, bad }) => {
  if (!good && !neutral && !bad) {
    return <div>No feedback given</div>;
  }
  return (
    <div>
      <table>
        <tbody>
          <StatisticksLine text="good" value={good} />
          <StatisticksLine text="neutral" value={neutral} />
          <StatisticksLine text="bad" value={bad} />
          <StatisticksLine
            text="average"
            value={(good - bad) / (good + neutral + bad)}
          />
          <StatisticksLine
            text="positive"
            value={(good * 100) / (good + neutral + bad)}
          />
        </tbody>
      </table>
    </div>
  );
};

export default Statistics;
