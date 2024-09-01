const age = 35;
const price = 500;
if(age <= 10) {
    console.log('you can eat for free');
}
else if(age >= 50){
    // 50% discount
    const discount = price * 50/100;
    const payAmount = price - discount;
    console.log(payAmount);


}
else if(age >= 40) {
    // 40% discount
    const discount = price * 40 / 100;
    const payAmount = price - discount;
    console.log(payAmount);

   
}

else if(age >= 30) {
    // 30% discount
    const discount = price * 30 / 100;
    const payAmount = price - discount;
    console.log(payAmount);

   
}

else{
    console.log(price);
}

