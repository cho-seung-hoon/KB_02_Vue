const fs = require('fs');

fs.readFile(
  '20250313_조승훈/20250313_조승훈_기본/example.txt',
  'utf-8',
  (err, data) => {
    if (err) {
      console.error(err);
    }
    console.log(data);
  }
);
