let i = 0
const questions_answers = [
  {
    question: "What is a string?",
    answer_1: "letters dwqdww wwwww  wwwwwwwwwww wwwwwwwwwwwwwwwww wwwwwwwwwwww wwwwww wwwwwwwww wwwww",
    answer_2: "Answer 2",
    answer_3: "Answer 3",
    answer_4: "Answer 4",
    answer: "answer 1"
  },
  {
    question: "Question 2",
    answer_1: "Answer 1",
    answer_2: "Answer 2",
    answer_3: "Answer 3",
    answer_4: "Answer 4",
    answer: "answer 2"
  },
  {
    question: "Question 3",
    answer_1: "Answer 1",
    answer_2: "Answer 2",
    answer_3: "Answer 3",
    answer_4: "Answer 4",
    answer: "answer 2"
  },
  {
    question: "Question 4",
    answer_1: "Answer 1",
    answer_2: "Answer 2",
    answer_3: "Answer 3",
    answer_4: "Answer 4",
    answer: "answer 2"
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

let quiz_render = () => {
  document.getElementById('quiz_page').innerHTML = `
    <div class="row justify-content-center">
      <div class="col-sm-6">
        <h1 class="display-2 text-center fw-bold question_header">${questions_answers[i].question}</h1>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-sm-6">
        <div class="btn-group-vertical" role="group" aria-label="answer button group">
          <button type="button" class="btn btn-outline-primary btn-lg ans_btn mb-1" id="answer_1">${questions_answers[i].answer_1}</button>
          <button type="button" class="btn btn-outline-primary btn-lg ans_btn mb-1" id="answer_2">${questions_answers[i].answer_2}</button>
          <button type="button" class="btn btn-outline-primary btn-lg ans_btn mb-1" id="answer_3">${questions_answers[i].answer_3}</button>
          <button type="button" class="btn btn-outline-primary btn-lg ans_btn mb-1" id="answer_4">${questions_answers[i].answer_4}</button>
        </div>
      </div>  
    </div>`
}

let final_score_render = () => {
  document.getElementById('quiz_page').innerHTML =`
    <div class="row justify-content-center">
      <div class="row justify-content-center">
        <div class="col-sm-6">
          <h1 class="display-4 text-center fw-bold">Your Final Score is: <h1>
          <h1 class="display-4 text-center fw-bold" id="final_score"></h1>
          <form>
            <div class="mb-3">
              <label for="initials" class="form-label">Enter Initials</label>
              <input type="text" name="initials" class="form-control" id="initials">
            </div>
            <button type="submit" class="btn btn-primary submit_btn" id="submit_btn">Submit</button>
          </form>
        </div>
      </div>      
    </div>
  `
  document.getElementById('navbar').innerHTML = ``
  
  document.getElementById('submit_btn').addEventListener('click', event => {
    event.preventDefault()
    highscore_render()
    // document.getElementById('quiz_page').innerHTML = `
    //       <h1>Is it working?</h1>
    //       <h1>${document.getElementById('initials').value}</h1>`
  })
}

let highscore_render = () => {
  document.getElementById('quiz_page').innerHTML =`
    <div class="row justify-content-center">
      <div class="col-sm-6">
        <h1 class="display-1 text-center fw-bolder">Highscores</h1>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-sm-6">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Initial</th>
              <th scope="col">Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-sm-6">
        <button type="button" class="btn btn-primary">Start Over</button>
        <button type="button" class="btn btn-primary">Reset Highscores</button>
      </div>
    </div>`
}

document.getElementById('start_btn').addEventListener('click', event => {
  i = 0
  quiz_render()
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
      final_score_render()
      // document.getElementById('submit_btn').addEventListener('click', event => {
      //   event.preventDefault()

      //   document.getElementById('quiz_page').innerHTML = `
      //     <h1>Is it working?</h1>
      //     <h1>${document.getElementById('initials').value}</h1>`
      // })
    }else{
      quiz_render()
      i++
    }    
  }
})

