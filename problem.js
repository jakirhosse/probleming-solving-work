// অদ্বিতীয় সংখ্যা গুলোর যোগফল বের করার ফাংশন

function findOddSum(arr) {
  let sum = 0; // যোগফল ০ দিয়ে শুরু
  for (let i = 0; i < arr.length; i++) {
    // অ্যারে iterate করা
    if (arr[i] % 2 !== 0) {
      // অদ্বিতীয় কিনা পরীক্ষা করা
      sum += arr[i]; // অদ্বিতীয় সংখ্যা যোগ করা
    }
  }
  return sum; // অদ্বিতীয় সংখ্যার মোট যোগফল রিটার্ন করা
}

// ব্যবহার উদাহরণ
const result1 = findOddSum([10, 21, 32, 43, 54]);
console.log(result1); // আউটপুট: 64 (21 + 43)

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return "এটি একটি লিপ বছর"; // বছরটি লিপ বছর
  } else {
    return "এটি একটি লিপ বছর নয়"; // বছরটি লিপ বছর নয়
  }
}

// ব্যবহার উদাহরণ
const result2 = isLeapYear(2028);
console.log(result2); // আউটপুট: "এটি একটি লিপ বছর"

// সংখ্যা গুলোর যোগফল বের করার ফাংশন///////////

function sumOfNumbers(arr) {
  let sum = 0; // যোগফল ০ দিয়ে শুরু

  for (let i = 0; i < arr.length; i++) {
    // অ্যারে iterate করা
    sum += arr[i]; // প্রতিটি সংখ্যাকে যোগ করা
  }

  return sum; // মোট যোগফল রিটার্ন করা
}

// ব্যবহার উদাহরণ
const result3 = sumOfNumbers([1, 2, 3, 4, 5]);
console.log(result3); // আউটপুট: 15 (1 + 2 + 3 + 4 + 5)

function multiplyNumbers(arr) {
  let product = 1; // গুণফল ১ দিয়ে শুরু

  for (let i = 0; i < arr.length; i++) {
    // অ্যারে iterate করা
    product *= arr[i]; // প্রতিটি সংখ্যাকে গুণ করা
  }

  return product; // মোট গুণফল রিটার্ন করা
}

// ব্যবহার উদাহরণ
const result = multiplyNumbers([1, 2, 3, 4, 5]);
console.log(result); // আউটপুট: 120 (1 * 2 * 3 * 4 * 5)

// ৫. বিপরীত ক্রমে ফ্যাক্টোরিয়াল বের করার ফাংশন
function factorialReverse(n) {
  function factorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }
  const fact = factorial(n);
  const reversedString = fact.toString().split("").reverse().join("");
  return reversedString;
}
const result5 = factorialReverse(5);
console.log(result5); // আউটপুট: "021"

// ৬. একটি অ্যারেকে সাজানোর ফাংশন
function sortArray(arr) {
  const newArray = [...arr];
  newArray.sort((a, b) => a - b);
  return newArray;
}
const result6 = sortArray([5, 3, 8, 1, 2]);
console.log(result6); // আউটপুট: [1, 2, 3, 5, 8]
