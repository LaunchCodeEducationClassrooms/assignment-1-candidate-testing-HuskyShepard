const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
module.exports.runProgram = function() {
let candidateName = input.question ('Candidate Name: ')
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let questions = ["Who was the first American woman in space? ",
"True or false: 5000 meters = 5 kilometers. ", "(5 + 3)/2 * 10 = ? ",
"Given the array [8, Orbit, Trajectory, 45] what entry is at index 2? ",
"What is the minimum crew size for the International Space Station(ISS)? "];
  let answers = ["sally ride","true","40","trajectory","3"]
  let response = [];
  let correctAnswers = 5;
  
  // ask each question

  
    // calculate score
  let numberCorrect = 0;
  let score;


  for(let i = 0; i < questions.length; i++){
    console.log(`${i+1}) ${questions[i]}`);
    
    response[i] = input.question(`Your Answer: `);
    console.log(`Correct Answer: ${answers[i]}`);
    if(response[i].toLowerCase() === answers[i].toLowerCase()){
      numberCorrect++;
    }
    console.log("");
  }

  score = (numberCorrect/questions.length) * 100;

  console.log(`>>> Overall Grade: ${score}% (${numberCorrect} of ${questions.length} responses correct) <<<`);
  console.log(`>>> Status: ${(score >= 80)?'PASSED':'FAILED'} <<<`)
;}