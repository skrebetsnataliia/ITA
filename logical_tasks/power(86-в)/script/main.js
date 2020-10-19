function power(a, n){
    let result=1;
    for(let i=0; i<n; i++){
      result*=a;
    }
    return result;
  }
  
  console.log(power(-5, 3));
  console.log(power(5.2, 2));
  console.log(power(-6.5, 3));
  console.log(power(3.23, 2));