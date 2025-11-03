function convertToRoman(num) {
  // Step 1: Roman symbols with subtractive notation included
  const romanMap = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1],
  ];

  // Step 2: Initialize result
  let result = '';

  // Step 3: Loop through each Roman symbol
  for (let [symbol, value] of romanMap) {
    // Step 4: Keep subtracting while possible
    while (num >= value) {
      result += symbol;  // add the symbol to result
      num -= value;      // subtract its value
    }
  }

  return result;
}

