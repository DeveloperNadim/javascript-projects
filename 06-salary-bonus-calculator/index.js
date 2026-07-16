const salary=45000;
const yearsOfService=10;
const performance="excellent";
if(yearsOfService>=5 && performance==="excellent"){
    console.log("Salary = "+salary);
    console.log("bonus = "+ (salary*0.2) +" Taka  (20%)");
    console.log("your total salary = "+ (salary+(salary*0.2)) + " Taka");
}else if(yearsOfService>=5){
    console.log("Salary = "+salary);
    console.log("Salary = "+(salary*0.1) +" Taka   (10%)");
    console.log("your total salary = "+ (salary+(salary*0.1)) +" Taka");
}else if(performance==="excellent"){
    console.log("Salary = "+salary);
    console.log("Salary = "+(salary*0.05) +" Taka (5%)");
    console.log("your total salary= "+ (salary+(salary*0.05)) + " Taka");
}else{
    console.log("Sorry ! you are not eligible for bonus");
    console.log("Don't Lose Hope Work Hard To Earn Bonus.");
}