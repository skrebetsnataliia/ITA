function removeIndex(k, p){
    let arr=[-24,-10,-5,-1, 0, 3, 4, 6, 9, 45, 98, 145];
    if(k<=arr.length){
      arr.splice(k-1, 1);
    }
    else{
      return -1;
    }
    console.log(arr);
    arr.find((value, index)=>{ 
      if(value>p){
        arr.splice(index, 0, p);
        return index;
      }
      else{
        arr.push(p)
        return 1;
      }
     }
    );
    return arr;
  }
  
  console.log(removeIndex(4, 200));
  console.log(removeIndex(0, 200));