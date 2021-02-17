let i = 0
const questions_answers = [
  {
    "question": "Question 1",
    "answer_1": "Answer 1",
    "answer_2": "Answer 2",
    "answer_3": "Answer 3",
    "answer_4": "Answer 4",
    "answer": "answer 1"

  },
  {
    "question": "Question 2",
    "answer_1": "Answer 1",
    "answer_2": "Answer 2",
    "answer_3": "Answer 3",
    "answer_4": "Answer 4",
    "answer": "answer 2"

  },
  {
    "question": "Question 3",
    "answer_1": "Answer 1",
    "answer_2": "Answer 2",
    "answer_3": "Answer 3",
    "answer_4": "Answer 4",
    "answer": "answer 3"

  },
  {
    "question": "Question 4",
    "answer_1": "Answer 1",
    "answer_2": "Answer 2",
    "answer_3": "Answer 3",
    "answer_4": "Answer 4",
    "answer": "answer 4"

  },
]


// let quiz_func = () => {
//   questions_answers.forEach(element => {

//     document.addEventListener('click', event => {
//       if (event.target.classList.contains('ans_btn')) {
//         document.getElementById('quiz_page').innerHTML += `
//           <div class="row justify-content-center">
//             <div class="col-sm-6">
//               <h1 class="display-2 text-center fw-bold question_header">${element.question}</h1>
//             </div>
//           </div>
//           <div class="row justify-content-center">
//             <div class="col-sm-6">
//               <div class="btn-group-vertical" role="group" aria-label="answer button group">
//                 <button type="button" class="btn btn-outline-primary btn-lg ans_btn" id="answer_1">${element.answer_1}</button>
//                 <button type="button" class="btn btn-outline-primary btn-lg ans_btn" id="answer_2">${element.answer_2}</button>
//                 <button type="button" class="btn btn-outline-primary btn-lg ans_btn" id="answer_3">${element.answer_3}</button>
//                 <button type="button" class="btn btn-outline-primary btn-lg ans_btn" id="answer_4">${element.answer_4}</button>
//               </div>
//             </div>  
//           </div>`
//       }
//     })
//   })
// }

let quiz_func = () => {
  document.getElementById('quiz_page').innerHTML = `
    <div class="row justify-content-center">
      <div class="col-sm-6">
        <h1 class="display-2 text-center fw-bold question_header">${questions_answers[i].question}</h1>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-sm-6">
        <div class="btn-group-vertical" role="group" aria-label="answer button group">
          <button type="button" class="btn btn-outline-primary btn-lg ans_btn" id="answer_1">${questions_answers[i].answer_1}</button>
          <button type="button" class="btn btn-outline-primary btn-lg ans_btn" id="answer_2">${questions_answers[i].answer_2}</button>
          <button type="button" class="btn btn-outline-primary btn-lg ans_btn" id="answer_3">${questions_answers[i].answer_3}</button>
          <button type="button" class="btn btn-outline-primary btn-lg ans_btn" id="answer_4">${questions_answers[i].answer_4}</button>
        </div>
      </div>  
    </div>`
}

document.getElementById('start_btn').addEventListener('click', event => {
  i = 0
  quiz_func()
  i++
  // document.getElementById('quiz_page').innerHTML = `
  //     <div class="row justify-content-center">
  //     <div class="col-sm-6">
  //       <h1 class="display-2 text-center fw-bold question_header">Question 1</h1>
  //     </div>
  //   </div>
  //   <div class="row justify-content-center">
  //     <div class="col-sm-6">
  //       <div class="btn-group-vertical" role="group" aria-label="answer button group">
  //         <button type="button" class="btn btn-outline-primary btn-lg" id="answer_1">Answer 1</button>
  //         <button type="button" class="btn btn-outline-primary btn-lg" id="answer_2">Answer 2</button>
  //         <button type="button" class="btn btn-outline-primary btn-lg" id="answer_3">Answer 3</button>
  //         <button type="button" class="btn btn-outline-primary btn-lg" id="answer_4">Answer 4</button>
  //       </div>
  //     </div>  
  //   </div>

  // `
})

document.addEventListener('click', event => {
  if (event.target.classList.contains('ans_btn')) {
    if(i >= questions_answers.length){
      document.getElementById('quiz_page').innerHTML = `<h1>You Did It!</h1>`
    }else{
      quiz_func()
      i++
    }
    
  }
})