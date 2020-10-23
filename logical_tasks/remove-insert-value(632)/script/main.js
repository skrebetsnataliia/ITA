function removeIndex(k, p){
    let arr=[-24,-10,-5,-1, 0, 3, 4, 6, 9, 45, 98, 145];
    if(k<=arr.length){
      arr.splice(k-1, 1);
    }
    else{
      return -1;
    }
    for(let i = 0; i < arr.length; ++i){
      if( p < arr[i]){
         arr.splice(i, 0, p);
         break;
      }
    }
    return arr;
  }
  
  console.log(removeIndex(1, -100));
  console.log(removeIndex(5, 100));