function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    let targetValue = array.indexOf(target - array[i]);
    if (targetValue !== -1) {
      if (targetValue !== i) {
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  0(n)
*/

/* 
  iterate through each number and subtract it from target
  if array has that value return true
  else return false
*/

/*
  Add written explanation of your solution here
  I first had the function iterate through each number in the array using a for of loop and subtract each number from the target number.
  I used indexOf so that if that number existed, it would return the index. Any other case, it would return -1.
  However, this didn't account for the case in which a number in the array could be doubled to get the target value.
  I changed the for of loop to a for loop iterater, that way I could have access to the index of each value through the counter variable.
  I created a second if statement checked that our target - number 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 3, 5, 4, 1], 6));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 5, 2], 4));
}

module.exports = hasTargetSum;
