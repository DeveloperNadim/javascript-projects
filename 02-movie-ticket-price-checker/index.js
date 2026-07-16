// challenge 2: Movie Ticket Price
// Rules:
// Age < 5 → Free
// Student → 20% discount
// Age ≥ 60 → 30% discount
// Otherwise → Full price
// Ticket price = 500.
// Print the final price.

const ticketPrice=500;
const age=70;
const isStudent=false;
if(age<=0){
    console.log("Pleas Enter a valid age ");
}else if(age>0 && age<5){
    console.log("you'r ticket is free");
}
else if(isStudent){
    const finalTicketPrice=(500-(500*(20/100)));
    console.log("Your final ticket price = "+finalTicketPrice);
}else if(age>=60){
    const finalTicketPrice2=(500-(500*(30/100)));
    console.log("Your final ticket price = "+finalTicketPrice2);
}else{
    console.log("Your ticket price = "+ticketPrice);
}