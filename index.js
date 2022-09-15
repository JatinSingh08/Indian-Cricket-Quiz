var readlineSync = require('readline-sync')

var userName = readlineSync.question('Welcome to quiz game. To play the game enter your name : ')
console.log(`Hello👋 ${userName}, let's begin the game`)

console.log('---------------------\n')

var questionList = [
  
  {
    question: "1. How many times did India win the Cricket World Cup? \n\t" + "a: 2 times\n\t" + "b: 1 time \n\t" +"c: 3 times \n\t",
    answer: "a"
  },

  {
    question: "2. Who won the ICC Champions Trophy in 2013 ?\n\t" + "a: Australia \n\t" + "b: India \n\t" + "c: West Indies \n\t",
    answer: "b"
  },
  
  {
    question: "3. Who is known as The God of Cricket?\n\t" + "a: Sachin Tendulkar \n\t" + "b: Virat Kohli \n\t" + "c: MS Dhoni \n\t",
    answer: "a"
  },
  
  {
    question: "4. Who was the Indian Captain when India won the Cricket World Cup in 1983? \n\t" + "a: Sunil Gavaskar \n\t" + "b: Kapil Dev \n\t" + "c: Ravi Shastri \n\t",
    answer: "b"
  },
  
  {
    question: "5. Who won the First IPL in 2008?\n\t" + "a: Mumbai Indians \n\t" + "b: Chennai Super Kings \n\t" + "c: Rajasthan Royals \n\t",
    answer: "c"
  }
  
]

let highScore = 40;
let score = 0;

function playGame(question, answer) {
  
  var userAnswer = readlineSync.question(question);
  
  if(userAnswer.toUpperCase() === answer.toUpperCase() ) {
    score =  score + 10;
    console.log('You typed : '+ userAnswer + ' ')
    console.log('Your are correct')
    console.log('Score : ' + score);
    console.log('----------\n')
  }
  else {
    console.log('You typed : ' + userAnswer + ' ');
    console.log('You are wrong');
    console.log('Score : ' + score);
    console.log('----------\n')
  }
  
}

for(let i=0;i<questionList.length;i++) {
  playGame(questionList[i].question,questionList[i].answer);
}

console.log('Quiz is over !! ')
console.log('------------------')
console.log('Your final score is : ' + score);

if(score > highScore) {
  console.log("Congrats " + userName + ", you broke the high score 🏆\n send me the screenshot of your score to add your name to high score.")
}

  

