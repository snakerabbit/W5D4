Array.prototype.uniq = function() {
  // console.log("HAPPPY")
  // console.log("HAPPPY")

  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (newArray.includes(this[i])===false){
      newArray.push(this[i]);
    }
  }
  return newArray;
};

Array.prototype.twoSum = function() {
  const newArray = [];
  const len = this.length;

  for (let i = 0; i < len; i++) {
    let current = this[i];
    for (let j = i + 1; j < len + 1; j++) {
      let match = this[j];
      if (current + match === 0) {
        newArray.push([i, j]);
      }
    }
  }

  return newArray;
};

Array.prototype.transpose = function () {
  const transposed = [];
  const len = this.length;

  for (let i = 0; i < len; i++) {
    const subArr = [];
    for (let j = 0; j < this[i].length; j++) {
      subArr.push(this[j][i]);
    }
    transposed.push(subArr);
  }
  return transposed;
};
