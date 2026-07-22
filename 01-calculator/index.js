// Simple Calculator
const number1=50;
const number2=10;
const sum=number1+number2;
const subtract=number1-number2;
const multiplication=number1*number2;
const division=number1/number2;
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Enter operator + - * / ", function (operator) {
    switch(operator){
    case "+":
        console.log(number1+ " + "+number2 + " = " +sum);
        break;

    case "-":
        console.log(number1+ "-"+number2 + " = " +subtract);
        break;

    case "*":
        console.log(number1+ " * "+number2 + " = " +multiplication);
        break;

    case "/":
        console.log(number1+ " / "+number2 + " = " +division);
        break;
}
  rl.close();
});
