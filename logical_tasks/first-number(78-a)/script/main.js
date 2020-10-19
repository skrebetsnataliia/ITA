function findFirstNumber(n){
    let firstNumber=Number(String(n)[0]);
    return firstNumber;
}

console.log(findFirstNumber(5));
console.log(findFirstNumber(45));
console.log(findFirstNumber(23456789));
console.log(findFirstNumber(98753));