// অ্যারেতে সমস্ত জোড় সংখ্যার যোগফল বের করা//////////

// একটি অ্যারে ডিফাইন করছি
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// সমস্ত জোড় সংখ্যার যোগফল রাখার জন্য একটি ভেরিয়েবল
let sumOfEvenNumbers = 0;

// for লুপ ব্যবহার করে অ্যারের প্রতিটি উপাদান যাচাই করছি
for (let i = 0; i < numbers.length; i++) {
  // যদি সংখ্যা জোড় হয়, তাহলে যোগফলে যোগ করব
  if (numbers[i] % 2 === 0) {
    sumOfEvenNumbers += numbers[i];
  }
}

// ফলাফল দেখাচ্ছে
console.log("জোড় সংখ্যার যোগফল:", sumOfEvenNumbers);

// ইউনিক স্ট্রিং চেক করা //////////////

// ইউনিক স্ট্রিং চেক করার জন্য ফাংশন
function isUniqueString(str) {
  // একটি নতুন Set তৈরি করা হচ্ছে
  const charSet = new Set();

  // স্ট্রিং-এর প্রতিটি অক্ষর যাচাই করা হচ্ছে
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // যদি সেটে অক্ষরটি আগে থেকেই থাকে, তাহলে ইউনিক নয়
    if (charSet.has(char)) {
      return false; // ইউনিক নয়
    }

    // সেটে নতুন অক্ষর যোগ করা হচ্ছে
    charSet.add(char);
  }

  // যদি সব অক্ষর ইউনিক হয়, তাহলে true রিটার্ন হবে
  return true; // ইউনিক
}

// উদাহরণ পরীক্ষা
console.log(isUniqueString("hello")); // আউটপুট: false (কারণ 'l' দুটি বার আছে)
console.log(isUniqueString("world")); // আউটপুট: true (সব অক্ষর ইউনিক)

// অ্যারেতে একটি নির্দিষ্ট মানের সংখ্যা গণনা করা  //////////

// ফাংশন যা নির্দিষ্ট মানের সংখ্যা গণনা করবে
function countOccurrences(arr, target) {
  let count = 0; // গণনার জন্য একটি ভেরিয়েবল

  // অ্যারের প্রতিটি উপাদান যাচাই করার জন্য লুপ
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      // যদি উপাদানটি নির্দিষ্ট মানের সমান হয়
      count++; // গণনা বাড়ান
    }
  }

  return count; // নির্দিষ্ট মানের সংখ্যা কতবার আছে তা রিটার্ন করুন
}

// উদাহরণ পরীক্ষা
const numbers1 = [1, 2, 3, 4, 2, 5, 2, 6, 2];
const targetValue = 2;

const result = countOccurrences(numbers1, targetValue);
console.log(`${targetValue} মানটি অ্যারেতে ${result} বার রয়েছে।`);

// অ্যারেতে সবচেয়ে ছোট এবং বড় সংখ্যা বের করা///////////

// ফাংশন যা অ্যারের সবচেয়ে ছোট এবং বড় সংখ্যা খুঁজে বের করবে
function findMinAndMax(arr) {
  // যদি অ্যারে খালি থাকে, তাহলে উপযুক্ত বার্তা রিটার্ন করি
  if (arr.length === 0) {
    return "অ্যারে খালি আছে!";
  }

  // প্রথম উপাদানকে প্রাথমিকভাবে ছোট এবং বড় সংখ্যা ধরে নিচ্ছি
  let min = arr[0];
  let max = arr[0];

  // অ্যারের প্রতিটি উপাদান যাচাই করার জন্য লুপ
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      // যদি উপাদানটি ছোট হয়
      min = arr[i];
    }
    if (arr[i] > max) {
      // যদি উপাদানটি বড় হয়
      max = arr[i];
    }
  }

  return { min, max }; // ছোট এবং বড় সংখ্যার মান রিটার্ন করছি
}

// উদাহরণ পরীক্ষা
const numbers = [3, 7, 1, 9, 2, 8, 6, 4, 5];
const result = findMinAndMax(numbers);
console.log(`অ্যারের সবচেয়ে ছোট সংখ্যা: ${result.min}`);
console.log(`অ্যারের সবচেয়ে বড় সংখ্যা: ${result.max}`);
