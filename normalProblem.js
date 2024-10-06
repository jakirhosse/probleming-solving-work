// 1.  উল্টো স্ট্রিং (Reverse a string)//////////

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // Output: "olleh"

// ২. পালিন্ড্রম চেক (Check for palindrome)////////////

function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false

// ৩. ফ্যাক্টরিয়াল (Factorial)//////////
function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(5)); // Output: 120

// ৪. অ্যারেতে বৃহত্তম সংখ্যা খুঁজে বের করো (Find largest number in an array)///////////

function largestNumber(arr) {
  return Math.max(...arr);
}
console.log(largestNumber([7646, 87455, 87465]));

// সংখ্যা সমষ্টি (Sum of numbers in an array)///////////

function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

console.log(sumArray([1, 2, 3, 4])); // Output: 10

// ফিজবাজ সমস্যা (FizzBuzz)/////////
// Fizz প্রিন্ট হয় যদি সংখ্যা ৩ দ্বারা বিভাজ্য হয়, Buzz যদি ৫ দ্বারা বিভাজ্য হয়, আর FizzBuzz যদি উভয় দ্বারা বিভাজ্য হয়।/////////

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }
}

fizzBuzz(30);

// প্রাইম সংখ্যা চেক (Check if a number is prime)//////
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(7)); // Output: true

function fibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibonacci(7)); // Output: [0, 1, 1, 2, 3, 5, 8]

// একটি অ্যারে থেকে ডুপ্লিকেট অপসারণ//////////
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 3, 3, 4])); // Output: [1, 2, 3, 4]

// একটি স্ট্রিং এর ভাওয়েল গোনা/////////

function countVowels(str) {
  const vowels = "aeiouAEIOU";
  return [...str].filter((char) => vowels.includes(char)).length;
}

console.log(countVowels("hello")); // Output: 2

// . দুটি অ্যারের মিলিত মান বের করা //////////

function findCommon(arr1, arr2) {
  return arr1.filter((item) => arr2.includes(item));
}

console.log(findCommon([1, 2, 3], [2, 3, 4])); // Output: [2, 3]

// অড এবং ইভেন সংখ্যা আলাদা করা //

function separateOddEven(arr) {
  let odd = arr.filter((num) => num % 2 !== 0);
  let even = arr.filter((num) => num % 2 === 0);
  return { odd, even };
}

console.log(separateOddEven([1, 2, 3, 4])); // Output: { odd: [1, 3], even: [2, 4] }

//       স্ট্রিংয়ের প্রতিটি শব্দের প্রথম অক্ষর বড় করা////////////

function capitalizeWords(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalizeWords("hello world")); // Output: "Hello World"
