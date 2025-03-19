const fs = require('fs');

const data = fs.readFileSync(
  '20250313_조승훈/20250313_조승훈_기본/example.txt',
  'utf-8'
);
console.log(data);
