/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/
console.log("\nexercise 1\n")
function area(sizeH, sizeW){
    areaSize = sizeH*sizeW
    return areaSize
}

let rectangle = area(11,12)
console.log(rectangle)
/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
console.log("\nexercise 2\n")
function crazySum(sum1, sum2){
    result = sum1+sum2
    if(sum1 === sum2){
        return result*3
    }
    return result
}
let Sum=crazySum(10,11)
console.log(Sum)

Sum=crazySum(10,10)
console.log(Sum)
/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/
console.log("\nexercise 3\n")
function crazyDiff(number){
    if(number>19){
        result = number - 19
        return result*3
    }
    result = 19 - number
    return result
}

let Diff = crazyDiff(20)
console.log(Diff)

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n it's equal to 400.
*/
console.log("\nexercise 4\n")
function boundary(n){
result = (n>=20&&n<=100)|| n === 400
return result
}

let boundry = boundary(100)
console.log(boundry)
/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/
console.log("\nexercise 5\n")
function strivify(Strive){
    result = Strive.toLowerCase() === "strive" 
    if(result === true){
        return Strive
    }
    return "Strive"+" "+ Strive
}
let Striv = strivify("food")
console.log(Striv)

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/
console.log("\nexercise 6\n")
function check3and7(n){
    result = n%7 === 0
    if (result === true){
        return result
    }else{
        result = n%3 ===0
        if (result === true){
            return result
    }
}
return result}
let check = check3and7(21)
console.log(check)
/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/
console.log("\nexercise 7\n")
function reverseString(stringR){
    stringRR = stringR
let i = 0
let j = stringR.length-1

stringRR = stringR.split("")
console.log(stringRR)
while(i<stringRR.length/2){
    x = stringRR[i]
    y = stringRR[j]
    stringRR[i] = y
    stringRR[j] = x
    i++
    j--
}
stringR = stringRR.join("")
return stringR
}
console.log(reverseString("Strive"))

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.
*/
console.log("\nexercise 8\n")
function upperFirst(stringUP){
    stringUPP = stringUP.split(" ");

    for (let i = 0; i < stringUPP.length; i++) {
        stringUPP[i] = stringUPP[i][0].toUpperCase() + stringUPP[i].substr(1);
    }
    stringUP = stringUPP.join(" ");
    return stringUP
}
console.log(upperFirst("this is nice"))
/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.
*/
console.log("\nexercise 9\n")
function cutString(CutThis){
    i=1
    j=CutThis.length-1
    return (CutThis.slice(i,j))
}
console.log(cutString("Paper"))
/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/
console.log("\nexercise 10\n")
function giveMeRandom(n){
    i = n-1
    arrayRNG = []
   arrayRNG.length = n
    while (i >= 0) {
        
        arrayRNG[i] = i
        i--
    }
    return arrayRNG
}
console.log(giveMeRandom(4))

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/
