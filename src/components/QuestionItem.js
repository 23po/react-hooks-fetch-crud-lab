import React, {useState} from "react";

function QuestionItem({ question }) {
  const { id, prompt, answers, correctIndex } = question;
  const [deleteState, setDeleteState] = useState(false);
  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));



 const handleDelete = (e) => {
   
  
  //setDeleteState(true);
  setDeleteState(true)

  fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify({
        "correctIndex": question.correctIndex
      })
    } )
  }

  return (
    deleteState ? null : (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick = {handleDelete} >Delete Question</button>
    </li>
    )
  );
}

export default QuestionItem;
