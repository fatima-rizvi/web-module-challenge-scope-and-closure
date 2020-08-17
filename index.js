// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * counter1 is the returned value of the function counterMaker whereas counter 2 is its own function. In counter1, the variable count is defined within the function while in counter2 it is defined outside of the function.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * counter2 does because it must look outside of itself to find the variable count.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
 * counter1 would be better when you want the number to reset everytime you call the function, so for something like rolling two dice. counter2 would be better when you want to keep track of a number and add to it, like a score.
 * 
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  let inningScore = Math.floor(Math.random() * (3 - 0) ) + 0;
  return inningScore;
}

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inning, numInnings){
  let homeScore = 0;
  let awayScore = 0;
  for(i = 0; i < numInnings; i++){
    homeScore = homeScore + inning();
    awayScore = awayScore + inning();
  }
  let score = {
    "Home": homeScore,
    "Away": awayScore
  }
  return score;
}

//console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */


function scoreboard(getInningScore, inning, numIn) {
  let finalHomeScore = 0;
  let finalAwayScore = 0;
  for(let k = 0; k < numIn; k++){
    score = getInningScore(inning, 1);
    console.log(`Inning ${k+1}: Away ${score['Away']} - Home ${score['Home']}`) ;
    finalHomeScore = finalHomeScore + score['Home'];
    finalAwayScore = finalAwayScore + score['Away'];
  }
  fullFinalScore = {
    "Home": finalHomeScore,
    "Away": finalAwayScore
  }
  console.log(`Final Score: Away ${fullFinalScore['Away']} - Home ${fullFinalScore['Home']}` )
}

scoreboard(finalScore, inning, 9);


