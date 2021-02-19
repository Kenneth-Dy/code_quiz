let i = 0
let score = 50
let stop_timer = false
let timeout_response
const questions_answers = [
  {
    question: "What is a string?",
    answer_1: "letters dwqdww wwwww  wwwwwwwwwww wwwwwwwwwwwwwwwww wwwwwwwwwwww wwwwww wwwwwwwww wwwww",
    answer_2: "Answer 2",
    answer_3: "Answer 3",
    answer_4: "Answer 4",
    solution: "answer_1"
  },
  {
    question: "Question 2",
    answer_1: "Answer 1",
    answer_2: "Answer 2",
    answer_3: "Answer 3",
    answer_4: "Answer 4",
    solution: "answer_2"
  },
  {
    question: "Question 3",
    answer_1: "Answer 1",
    answer_2: "Answer 2",
    answer_3: "Answer 3",
    answer_4: "Answer 4",
    solution: "answer_3"
  },
  {
    question: "Question 4",
    answer_1: "Answer 1",
    answer_2: "Answer 2",
    answer_3: "Answer 3",
    answer_4: "Answer 4",
    solution: "answer_4"
  },
]

const start_interval = () => {
  let timer = setInterval(() => {
    if (stop_timer === true) {
      clearInterval(timer)
    } else {
      if (score <= 0) {
        final_score_render()
        clearInterval(timer)
      }
      score--
      document.getElementById('time').textContent = `Time: ${score}`
    }
  }, 1000)
}

const start_timeout = () => {
  clearTimeout(timeout_response)
  timeout_response = setTimeout(() => {
    document.getElementById('quiz_response').innerHTML = ``
  }, 2000)
}

let start_render = () => {
  document.getElementById('navbar').innerHTML = `
    <li class="nav-item">
      <a class="nav-link active highscore_btn" aria-current="page" href="#">View Highscores</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled timer text-dark" id="time" aria-current="timer" href="#"></a>
    </li>
  `

  document.getElementById('quiz_page').innerHTML = `
    <div class="row justify-content-center">
      <div class="col-sm-6">
        <h1 class="display-1 text-center fw-bolder">Code Quiz</h1>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-sm-6 align-self-center">
        <p class="fs-3 text-center">Take the Quiz to test your Javascript knowledge! Answer the questions as fast as you can before the timer runs out. Make sure to get right answer or each wrong one will decrease your time.</p>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-sm-6">
        <p class ="text-center">
          <button type="button" class="btn btn-primary btn-lg start_btn" id="start_btn">Start</button>
        </p>
      </div>
    </div>
  `
  document.getElementById('time').textContent = `Time: ${score}`
}

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
  if (score <= 0) {
    document.getElementById('final_score').textContent = `0`
  }else {
    document.getElementById('final_score').textContent = `${score}`

  }

  // document.getElementById('submit_btn').addEventListener('click', event => {
  //   event.preventDefault()
  //   highscore_render()
  //   // document.getElementById('quiz_page').innerHTML = `
  //   //       <h1>Is it working?</h1>
  //   //       <h1>${document.getElementById('initials').value}</h1>`
  // })
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
        <button type="button" class="btn btn-primary start_over_btn">Start Over</button>
        <button type="button" class="btn btn-primary reset_btn">Reset Highscores</button>
      </div>
    </div>`

  document.getElementById('navbar').innerHTML = ``
}

document.addEventListener('click', event => {
  if (event.target.classList.contains('ans_btn')) {

    if(event.target.id === questions_answers[i].solution) {
      document.getElementById('quiz_response').innerHTML = `
        <p class="text-muted fs-4"> - Correct! - </p>`
    }else{
      document.getElementById('quiz_response').innerHTML = `
        <p class="text-muted fs-4"> - Incorrect - </p>`
      score -= 10
      document.getElementById('time').textContent = `Time: ${score}`
    }
    start_timeout()
    
    i++

    if (i >= questions_answers.length){
      stop_timer = true
      final_score_render()
      // document.getElementById('final_score').textContent = `${score}`
    }else{
      quiz_render()
    }
  }
  if(event.target.classList.contains('start_btn')) {
    i = 0
    stop_timer = false
    quiz_render()
    start_interval()
  }
  if (event.target.classList.contains('submit_btn')) {
    event.preventDefault()
    highscore_render()
  }
  if (event.target.classList.contains('reset_btn')) {
    
  }
  if (event.target.classList.contains('highscore_btn')) {
    stop_timer = true
    highscore_render()
  }
  if (event.target.classList.contains('start_over_btn')) {
    score = 50 
    start_render()
  }
})

start_render()