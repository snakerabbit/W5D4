const range = function range(start, end) {
  if (start > end) return [];
  if (start === end) return [start];

  let output = range(start, (end - 1)).concat([end]);
  return output;
};

const sumRec = function sumRec(arr) {
  if (arr.length === 0) return 0;
  if(arr.length === 1) return arr[0];

  let output = sumRec(arr.slice(0,arr.length-1)) + arr[arr.length-1];
  return output;

};

const expBase1 = function expBase1(base, exp) {
  if (exp === 0) return 1;

  if (exp > 0) {
    return base * expBase1(base, exp - 1);
  } else {
    return 1/base * expBase1(base, exp + 1);
  }
};

const expBase2 = function expBase2(base, exp) {
  if (exp === 0) return 1;
  if (exp === 1) return base;

  if (exp % 2 === 0) {
    return Math.pow(expBase2(base, exp/2), 2);
  } else {
    return Math.pow(expBase2(base, (exp - 1)/2), 2) * base;
  }
};

const fibonacci = function fibonacci(n) {
  if (n===1) return [0];
  if (n===2) return [0,1];
  let last = fibonacci(n-1);
  let lastIndex = last.length-1;
  return last.concat([last[lastIndex-1] + last[lastIndex]]);
};

const bsearch = function bsearch(arr, target) {
  if (arr.length === 0) return -1;
  // if (arr.length === 1) {
  //   if (arr[0] === target) {
  //     return 0;
  //   }
  //   else {
  //     console.log('test');
  //     return -1;
  //
  //   }
  // }


  let midIndex = Math.floor(arr.length / 2);
  if (target === arr[midIndex]) {
    return midIndex;
  } else if (target < arr[midIndex]) {
    return bsearch(arr.slice(0, midIndex), target);
  } else if (target > arr[midIndex]) {
    let offset = midIndex;
    let right = bsearch(arr.slice((midIndex + 1), (arr.length)), target);
    return (right === -1) ? -1 : offset + 1 + right;
    // return offset + 1 + bsearcreturn h(arr.slice((midIndex + 1), (arr.length)), target);
  // } else {
  //   return -1;
  }


};
