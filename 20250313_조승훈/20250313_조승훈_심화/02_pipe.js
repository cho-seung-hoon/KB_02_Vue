const fs = require('fs');
const rs = fs.createReadStream(
  '20250313_조승훈/20250313_조승훈_심화/readMe.txt',
  'utf8'
);
const ws = fs.createWriteStream('./writeMe.txt');
rs.pipe(ws);
