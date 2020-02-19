import React, { useState } from 'react';
import './NewGoal.css';

export default function NewGoal(props) {
  const [enteredText, setEnteredText] = useState("");

  const textChangeHandler = event => {
    setEnteredText(event.target.value);
  }

  const addGoalHandler = event => {
    const newGoal = {
      id: Math.random().toString(),
      text: enteredText
    }

    event.preventDefault();
    props.onAddGoal(newGoal);
    setEnteredText('');
  }

  return (
    <form className="new-goal" onSubmit={addGoalHandler} >
      <input type="text" value={enteredText} onChange={textChangeHandler} />
      <button type="submit" >Add Goal</button>
    </form>
  )
}
