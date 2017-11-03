// const readline = require('readline');
// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
// const addNumbers = function addNumbers(sum, numsLeft, completionCallback){
//
//   if (numsLeft > 0) {
//     reader.question('Add a number: ', (n) => {
//       let num = parseInt(n);
//       addNumbers(sum + num, numsLeft - 1, completionCallback);
//     });
//   } else {
//     completionCallback(sum);
//   }
// };
//
// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));







const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const addNumbers = function (sum, numsLeft, completionCallback)  {
  if (numsLeft > 0) {
    reader.question('Enter number: ', function(num)  {
      num = parseInt(num);
      addNumbers(sum += num, numsLeft -= 1, completionCallback);
    });
  }
  else {
    completionCallback(sum);
    reader.close();
  }
};


const completionCallback = function completionCallback(sum) {
  console.log(`${sum}`);
};

addNumbers(0, 2, completionCallback);
