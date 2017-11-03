const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const absurdBubbleSort = function absurdBubbleSort(arr, ccb)  {
  const outerBubbleSortLoop = function outerBubbleSortLoop(madeAnySwaps)  {
    if (madeAnySwaps)  {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    }
    else {
      ccb(arr);
    }
  };
  outerBubbleSortLoop(true);
};

const askIfGreaterThan = function askIfGreaterThan(el1, el2, callback)  {
  reader.question(`Is ${el1} > ${el2}?`, function (answer)  {
    if (answer.toLowerCase() === 'yes') {
      callback(true);
    }
    else {
      callback(false);
    }
  });
};

const innerBubbleSortLoop = function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i+1], function(response) {
      if (response) {
        let tmp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = tmp;
        madeAnySwaps = true;
      }
      innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
    });
  }
  else {
    outerBubbleSortLoop(madeAnySwaps);
  }
};

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
