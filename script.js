//A prime number is a positive integer that is only divisible by 1 and itself.
//For example, 2,3,5,7,11 are prime numbers.
var number = prompt("Please enter a number");
if (number == 1){
    console.log(
`${number} is neither prime nor composite number`);
    }
else if (number < 1){
    console.log(`$(number) is not a prime number`);
}
else {
    //number 15
    for (var i =2; i < number; i++){
        if (number%i == 0 ){
            var i = `${number} is not a prime number`;
            break;
        }
        else {
            var res = `${number} is a prime number`;
        }
    }
    
    console.log (res);
    console.log(i);

}