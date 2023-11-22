import React from "react";
import QuestionForm from "./QuestionForm";

function QuestionItem({ question, onDeleteQuestion }) {
  const { id, prompt, answers, correctIndex }= question;

  const options =question.answers  ? question.answers.map((answers, index) => (
    <option key={index} value={index}>
      {answers}
    </option>
  )): null;

  function handleDeleteClick(){
    //console.log(question)
    fetch(`http://localhost:4000/questions/${question.id}`, {
    method: "DELETE",
  })
    .then((r) => r.json())
    .then(() => onDeleteQuestion(question));
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
   
  );
  <QuestionForm />
}

export default QuestionItem;
