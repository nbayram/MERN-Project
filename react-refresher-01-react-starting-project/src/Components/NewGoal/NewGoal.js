import React from 'react';
import './NewGoal.css';

export default function NewGoal(props) {

  const addGoalHandler = event => {
    event.preventDefault();

    const newGoal = {
      id: Math.random().toString(),
      text: "My new goal!"
    }

    props.onAddGoal(newGoal);
  }

  return (
    <form className="new-goal" onSubmit={addGoalHandler} >
      <input type="text" />
      <button type="submit" >Add Goal</button>
    </form>
  )
}
