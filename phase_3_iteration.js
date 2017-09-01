Array.prototype.bubbleSort = function(){
  let newArr = this.slice();
  let sorted = false;
  while (sorted !== true) {
    sorted = true;
    for(let i = 0; i < this.length-1; i++) {
      let current = newArr[i];
      let next = newArr[i+1];
      if (current > next) {
        sorted = false;
        newArr[i] = next;
        newArr[i+1] = current;
        i += 1;
      }
    }
  }
  return newArr;
};


String.prototype.subStrings = function(){
  let newArr = [];
  for(let i = 0; i < this.length; i++){
    for(let j=0; j < this.length; j++){
      let subString = this.slice(i,j);
      if (newArr.includes(subString) === false){
        newArr.push(subString);
      }
    }
  }
  return newArr;
};
