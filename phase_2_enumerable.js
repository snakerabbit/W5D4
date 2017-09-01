Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

Array.prototype.myMap = function(callback) {
  const mappedArr = [];

  for (let i = 0; i < this.length; i++) {
    mappedArr.push(callback(this[i]));
  }

  return mappedArr;
};

Array.prototype.myReduce = function(callback, initialValue) {
  let acc;
  let i;
  if (initialValue) {
    acc = initialValue;
    i = 0;
  } else {
    acc = this[0];
    i = 1;
  }
  
  for (i; i < this.length; i++) {
    acc = callback(acc, this[i]);
  }
  return acc;
};
