let i = 0
let score = 50
let stop_timer = false
let timeout_response
let score_table = JSON.parse(localStorage.getItem('score_table')) || []
const questions_answers = [
  {
    question: "Describe a string datatype.",
    answer_1: "Letters in an alphabet",
    answer_2: "A sequence of characters",
    answer_3: "Multiple hyphens bunched together",
    answer_4: "What a ball of yarn is made out of",
    solution: "answer_2"
  },
  {
    question: "How do you initialize an object?",
    answer_1: "Brackets",
    answer_2: "Parantheses",
    answer_3: "Curly Brackets",
    answer_4: "Objects aren't real",
    solution: "answer_3"
  },
  {
    question: "What does a conditional statement require?",
    answer_1: "A boolean value",
    answer_2: "A for loop",
    answer_3: "A string value",
    answer_4: "A signature to make it binding",
    solution: "answer_3"
  },
  {
    question: "Which one is NOT a datatype?",
    answer_1: "boolean",
    answer_2: "string",
    answer_3: "integer",
    answer_4: "pizza",
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

// These render functions make the bulk of the HTML elements and are linked to a corresponding click event.
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
      <div class="col-sm-10">
        <h1 class="display-4 text-center fw-bold question_header">${questions_answers[i].question}</h1>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-sm-6">
        <div class="d-grid gap-2">
          <button type="button" class="btn btn-outline-primary btn-lg ans_btn" id="answer_1">${questions_answers[i].answer_1}</button>
          <button type="button" class="btn btn-outline-primary btn-lg ans_btn" id="answer_2">${questions_answers[i].answer_2}</button>
          <button type="button" class="btn btn-outline-primary btn-lg ans_btn" id="answer_3">${questions_answers[i].answer_3}</button>
          <button type="button" class="btn btn-outline-primary btn-lg ans_btn " id="answer_4">${questions_answers[i].answer_4}</button>
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
              <input type="text" name="initials" class="form-control initials" id="initials" maxlength="2">
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
          <tbody id="table_body">
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
  
  score_table.sort((a, b) => b.rec_score - a.rec_score)

  let j = 1
  score_table.forEach(elem => {
    document.getElementById('table_body').innerHTML +=`
      <tr>
        <th scope="row">${j}</th>
        <td>${elem.rec_initials}</td>
        <td>${elem.rec_score}</td>
      </tr>`
    j++
  })
}

// This is a massive event listener to handle most of the user inputs.
document.addEventListener('click', event => {
  // This event when triggered will start the timer and render the quiz.
  if (event.target.classList.contains('start_btn')) {
    i = 0
    stop_timer = false
    quiz_render()
    start_interval()
  }
  // This event when triggered loops through the questions and responding whether the answer was right or worng.
  // It also changes the timer and renders the final score page after the last question.
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
    }else{
      quiz_render()
    }
  }
  // This event when triggered adds the user's score and initials to the score_table array and local storage.
  // Renders the high score page as well
  if (event.target.classList.contains('submit_btn')) {
    event.preventDefault()

    if(score < 0){score = 0}
    let table_elem = {
      rec_score: score,
      rec_initials: document.getElementById('initials').value.toUpperCase()
    }

    score_table.push(table_elem)
    localStorage.setItem('score_table', JSON.stringify(score_table))

    highscore_render()
  }
  // This event when triggered will reset the highscores by assigning an empty array and clearing local storage.
  if (event.target.classList.contains('reset_btn')) {
    score_table = []
    localStorage.clear()
    highscore_render()
  }
  // This event when triggered will bring the user back to the start page and reset the time to the default.
  if (event.target.classList.contains('start_over_btn')) {
    score = 50 
    start_render()
  }
  // This event when triggered will render the highscore page and stop the timer.
  if (event.target.classList.contains('highscore_btn')) {
    stop_timer = true
    highscore_render()
  }
})

start_render()