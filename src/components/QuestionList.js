import React from "react";
import QuestionItem from  "./QuestionItem"; 

function QuestionList({questions}) {
  console.log(questions)
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map( (question) => { 
        console.log(question)
        console.log
        return <QuestionItem key = {question.id} question = {question}/>
      }
      )}</ul>
    </section>
  );
}

export default QuestionList;
