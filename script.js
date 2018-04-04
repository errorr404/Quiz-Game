/*
----Lets Build a fun quiz game in the console!----

1. Build a function constructor called Question to describe a question.A question should include:
a) Question itself
b) the answer from which the player can choose the correct one(Choose an adequate data structure here, array , object , ect)
e) Correct answer( I would use a number for this)

2. Create a couple of a question using the constructor

3. Store them all inside an array

4. Select ine random question and lof it on the console, together with the possible answer ( each question should have a number ) (Hint: write  a method for the quesions object for this task).

5. Use the 'Prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on the task 4.

6. check if the answer is correct and print to the console whether the answer is correct or not (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and dosen't interfere with the other programmers code (Hint: We learned a special technique to do exactly that)
*/

// solution:--

// fuction constructor

function Question(question, answer, correct) {
    this.question =question;
    this.answer= answer;
    this.correct= correct;
}

Question.prototype.displayQuestion = function(){
    
    console.log(this.question);
    
    for(var i=0;i< this.answer.length;i++) {
        console.log(i+':'+this.answer[i]);
    }
}



Question.prototype.checlanswer = function(){
    if(ans===this.correct){
        console.log('Correct answer!');
    }
    else console.log('Wrong answer!');
}
// Creating the question

var q1= new Question('Is javascript the coolest programming language in the world',
                     ['yes','no'],
                     0);

var q2= new Question('What is the name of this course\'s teacher?',
                    ['John','Michel'],
                    1);

var q3= new Question('What does best describe coding?',
                    ['Boring','Hard','Fun','Tidiuos'],
                    2);

var questions= [q1,q2,q3]; //Store the question in the array,

var n= Math.floor(Math.random()*questions.length);

questions[n].displayQuestion();


// use the prompt function

var ans = parseInt( prompt('Please Selct the correct answer.'));

questions[n].checlanswer(ans);

 
























































