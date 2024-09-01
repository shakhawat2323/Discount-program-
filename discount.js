 // Discount 

 const price= 6000;

 if(price >= 5000){
    //50% discount
    const discount= price * 50/ 100;
    const payAmonunt = price - discount;
    console.log(payAmonunt);
 }
 else{
    console.log(price)
 }