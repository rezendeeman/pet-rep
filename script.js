function findLongestWord(string) {
  // Change code below this line
let maxLength = 0;
let maxLengthIndex;
    let arr = string.split(" ");
  for (let i = 0; i < arr.length; i++){
    if (maxLength <= arr[i].length){
      maxLengthIndex = i;
      maxLength = arr[i].length;
    }
  }

return arr[maxLengthIndex];
  // Change code above this line
}

console.log(findLongestWord('May the force be with you'));