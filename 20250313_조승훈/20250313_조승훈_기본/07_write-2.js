const fs = require('fs');
const data = fs.readFileSync(
  '20250313_조승훈/20250313_조승훈_기본/example.txt',
  'utf8'
);
fs.writeFileSync('./text-1.txt', data);
