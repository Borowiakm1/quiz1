/**  @editor Matthew Borowiak
 *   @version 0.0.3
 *   @summary Quiz 1 code || edited: 10.23.17
 */

/**
 *   @author Bates, Howard (hbates@northmen.org)
 *   @version 0.0.2
 *   @summary Project 4 demo code || created: 03.16.2016
 *   @todo
 */
//The block above is an example of a multiline comment, which allows or multiple lines of text to be present within the code but not interfere with it.
//The line above this and this line itself are single line comments, which allow a single line of text that doesn't interfere with the code.

"use strict"; //Uses the "strict" Method for javascript coding
const PROMPT = require('readline-sync');

let continueResponse; //This portion contains a declaration of variables, or essentially shows which global variables are to be used.
let currentMonth, currentGrade, currentClassroom, upperTuition; //These defined variables to be used as calls for values that are to be defined and used later within the code, or are to be defined through specified user input.
//By seperating two sets of global variables above we can create cohesion, where we try to keep only variables that are relevant to one another together.  As continueResponse is used in a loop by itself it should be seperated from the rest of the variables.
const MAX_GRADE = 8, //Each of these constants use an assignment or the =, which assigns the object on the left of it, the value on the right of it.
    MAX_MONTH = 9,
    MAX_CLASSROOM = 3,
    KDG_TUITION = 80; //This section contains defined constants to be used within the code. Constants, are specifed values not subject to change in the code.

function main() { //This curly brace signifies the start of a block of code
    process.stdout.write('\x1Bc'); //Clears the screen
    setContinueResponse();
    while (continueResponse === 1) {
        setCurrentMonth();
        setCurrentGrade();
        setCurrentClassroom();
        processPaymentCoupons();
        setContinueResponse();
        for (let i = 0; i < MAX_CLASSROOM; i++) {
            printGoodbye();
        }
    }
} //This curly brace signifies the end of this coding block.
//This whole block of code starting on line 26 and ending on line 39 is an initialization block, This block of code sets all of the mutator methods that are to be used on the variables.
main();

function setContinueResponse() {
    if (continueResponse != null) { //This is an example of a conditional statement, where two possible outcomes are available depending on the current state of code and variables.
        continueResponse = -1;
        while (continueResponse !== 0 && continueResponse !== 1) { //This is a loop, or a section that is executed repeatedly until a certain condition is met.  In this case, the loop continues until continueResponse is equal to 0 or 1.
            continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        }
    } else { //This is the second half of the conditional statement, which ends the loop when the variable continueResponse is equal to 1.
        continueResponse = 1;
    }
}
//This whole section is a loop that forces the code to repeat until the condition for the else statement to run is met.

function setCurrentMonth() { //This first line is an example of a Signature line.  It specifies that the mutator method (which is a method that initializes or assigns a value to a variable) is to be applied to the specified variable.
    if (currentMonth != null && currentMonth <= MAX_MONTH) { //The conditional "if" statement runs when the set condition is met. Null is used to specify ceratin conditions for when a variable may or may not have a value.
        currentMonth++; //the use of ++ signifies an autoincrement, which will automatically add to the value of the specified variable
    } else { //When the conditional "if" statement's conditions are not met the "else" statement runs instead.
        currentMonth = 1;
    }
}
//this block of code sets the value for CurrentMonth

function setCurrentGrade() { //refer to line 55's comment
    if (typeof currentGrade !=='undefined' && currentGrade <= MAX_GRADE) {  //http://stackoverflow.com/questions/5076944/what-is-the-difference-between-null-and-undefined-in-javascript
        currentGrade++; //refer to line 57's comment
    } else { //refer to line 58's comment
        currentGrade = 0;
    }
}
//This block of code sets the value for CurrentGrade

function setCurrentClassroom() { //refer to line 55's comment
    if (typeof currentClassroom !== 'undefined' && currentClassroom <= MAX_CLASSROOM) {
        currentClassroom++; //refer to line 57's comment
    } else { //refer to line 58's comment
        currentClassroom = 1;
    }
}
//This block of code sets the value for CurrentClassroom

function setUpperTuition() { //refer to line 55's comment
    const BASE_TUITION = 60;
    upperTuition = BASE_TUITION * currentGrade; //sets the value for upperTuition by multiplying BASE_TUITION and currentGrade.
}
//This block of code specifies both the constant BASE_TUITION, and the value for upperTuition.
function processPaymentCoupons() { //refer to line 55's comment
    while (currentGrade <= MAX_GRADE) { //This is an example of a nested loop, where the innermost loop will run until its satisfied then proceed to the next.
        while (currentClassroom <= MAX_CLASSROOM) {
            while (currentMonth <= MAX_MONTH) {
                if (currentGrade == 0) { //refer to line 56's comment
                    console.log(`\n\tThe tuition for month: ${currentMonth}, for classroom: ${currentClassroom}, of grade: ${currentGrade} is: \$${KDG_TUITION}.`); //displays the comment, with the values of the specified variables.
                } else { //refer to line 58's comment
                    setUpperTuition();
                    console.log(`\n\tThe tuition for month: ${currentMonth}, for classroom: ${currentClassroom}, of grade: ${currentGrade} is: \$${upperTuition}.`); //refer to line 95's comment.
                }
                setCurrentMonth();
            }
            setCurrentClassroom();
            setCurrentMonth();
        }
        setCurrentGrade();
        setCurrentClassroom();
    }
}
//This block of code displays the tuition for the specified month, classroom and grade or otherwise sets the value for the upperTuition and then displays the comment with the newly factored tuition amount.

function printGoodbye() { //refer to line 55's comment
    console.log(`\tGoodbye.`); //prints the phrase "Goodbye"
}
