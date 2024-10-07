// ফাংশন যা ম্যাট্রিক্সের প্রধান ডায়াগোনালের যোগফল বের করবে
function diagonalSum(matrix) {
  let sum = 0; // ডায়াগোনালের উপাদানগুলোর যোগফল রাখার জন্য ভেরিয়েবল

  // ম্যাট্রিক্সের প্রতিটি উপাদান যাচাই করার জন্য লুপ
  for (let i = 0; i < matrix.length; i++) {
    sum += matrix[i][i]; // প্রধান ডায়াগোনালের উপাদানগুলো যোগ করছি
  }

  return sum; // যোগফল রিটার্ন করছি
}

// উদাহরণ ম্যাট্রিক্স
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const result = diagonalSum(matrix);
console.log(`ম্যাট্রিক্সের প্রধান ডায়াগোনালের যোগফল: ${result}`);

// ম্যাট্রিক্সের সারির (Row) যোগফল বের করা///////////

// ফাংশন যা ম্যাট্রিক্সের প্রতিটি সারির যোগফল বের করবে
function rowSum(matrix) {
  const rowSums = []; // প্রতিটি সারির যোগফল রাখার জন্য একটি অ্যারে

  // প্রতিটি সারি যাচাই করার জন্য লুপ
  for (let i = 0; i < matrix.length; i++) {
    let sum = 0; // প্রতিটি সারির যোগফল রাখার জন্য ভেরিয়েবল
    for (let j = 0; j < matrix[i].length; j++) {
      sum += matrix[i][j]; // প্রতিটি উপাদান যোগ করছি
    }
    rowSums.push(sum); // সারির যোগফল অ্যারেতে যোগ করছি
  }

  return rowSums; // সারির যোগফল রিটার্ন করছি
}

// উদাহরণ ম্যাট্রিক্স
const matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(`প্রতিটি সারির যোগফল: ${rowSum(matrix1)}`);

// ম্যাট্রিক্সের কলামের (Column) যোগফল বের করা///////

// ফাংশন যা ম্যাট্রিক্সের প্রতিটি কলামের যোগফল বের করবে
function columnSum(matrix) {
  const columnSums = new Array(matrix[0].length).fill(0); // প্রতিটি কলামের যোগফল রাখার জন্য একটি অ্যারে

  // প্রতিটি কলাম যাচাই করার জন্য লুপ
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      columnSums[j] += matrix[i][j]; // প্রতিটি উপাদান যোগ করছি
    }
  }

  return columnSums; // কলামের যোগফল রিটার্ন করছি
}

// উদাহরণ ম্যাট্রিক্স
const matrix2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(`প্রতিটি কলামের যোগফল: ${columnSum(matrix2)}`);

// ম্যাট্রিক্সের ট্রান্সপোজ (Transpose) বের করা/////////

// ফাংশন যা ম্যাট্রিক্সের ট্রান্সপোজ বের করবে
function transposeMatrix(matrix) {
  const transposed = [];

  for (let i = 0; i < matrix[0].length; i++) {
    transposed[i] = [];
    for (let j = 0; j < matrix.length; j++) {
      transposed[i][j] = matrix[j][i];
    }
  }

  return transposed; // ট্রান্সপোজ ম্যাট্রিক্স রিটার্ন করছি
}

// উদাহরণ ম্যাট্রিক্স
const matrix3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(`ম্যাট্রিক্সের ট্রান্সপোজ:`);
console.log(transposeMatrix(matrix3));
